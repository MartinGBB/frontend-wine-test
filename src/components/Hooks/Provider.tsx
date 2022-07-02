import { useEffect, useState } from "react";
import { fetchApi } from "../../utils/fetchApi";
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
    const data = await fetchApi(nextPage);
    setQuantityProducts(data.totalItems);
    setProducts(data.items);
  };

  

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
