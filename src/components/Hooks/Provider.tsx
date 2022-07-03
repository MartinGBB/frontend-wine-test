import { useEffect, useState } from "react";
import { fetchApi } from "../../utils/fetchApi";
import { searchName } from "../../utils/searchName";
import { searchPrice } from "../../utils/searchPrice";
import { MyContext } from "./Context";

interface ChildrenContext {
  children: React.ReactNode;
}

const Provider = ({ children }: ChildrenContext) => {
  const [inputFilter, setInputFilter] = useState("");
  const [filterPrice, setFilterPrice] = useState("everybody");

  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState('');
  const [nextPage, setNextPage] = useState('1');
  const [allProducts, setAllProducts] = useState([]);

  const contextValue = {
    inputFilter,
    setInputFilter,
    filterPrice,
    setFilterPrice,

    products,
    setProducts,
    quantityProducts,
    setQuantityProducts,
    nextPage,
    setNextPage,
  };

  const handleFetch = async () => {
    const endpoint = `https://wine-back-test.herokuapp.com/products?page=${nextPage}&limit=9`
    const data = await fetchApi(endpoint);
    setAllProducts(data.items)
    setQuantityProducts(data.totalItems);

    setProducts(data.items);
  };

  const handleFilterPrice = async () => {
    if (filterPrice === 'everybody') {
      setProducts(allProducts)
    };
    const filter = searchPrice(filterPrice, allProducts)
    setProducts(filter);
  };

  const handleFilterInput = async () => {
    const endpoint = `https://wine-back-test.herokuapp.com/products`;
    const data = await fetchApi(endpoint);
    setAllProducts(data.items)



    if (inputFilter === '') {
      handleFetch()
    };
    const filter = searchName(inputFilter, allProducts)
    setProducts(filter)
    console.log(filter, inputFilter)
  }

  useEffect(() => {
    handleFilterInput()
  }, [inputFilter])

  useEffect(() => {
    handleFilterPrice()
  }, [filterPrice])

  useEffect(() => {
    handleFetch()
  }, [nextPage])

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
