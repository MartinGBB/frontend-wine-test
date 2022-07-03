import { useState } from "react";
import { MyContext } from "./Context";

interface ChildrenContext {
  children: React.ReactNode;
}

const Provider = ({ children }: ChildrenContext) => {
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState('');

  const contextValue = {
    products,
    setProducts,
    quantityProducts,
    setQuantityProducts
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
