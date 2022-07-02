import { useEffect, useState } from "react";
import { fetchApi } from "../../utils/fetchApi";
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
  const [dataApi, setDataApi] = useState([]);

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
    setDataApi(data.items)
    setQuantityProducts(data.totalItems);
    setProducts(data.items);
  };

  const handleFilterPrice = async () => {
    if (filterPrice === 'everybody') {
      setProducts(dataApi)
    }
    const filter = searchPrice(filterPrice, dataApi)
    setProducts(filter);
  }

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
