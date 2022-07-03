import { useState } from "react";

import { MyContext } from "./Context";

interface ChildrenContext {
  children: React.ReactNode;
}

const Provider = ({ children }: ChildrenContext) => {
  const [inputFilter, setInputFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState('');

  const contextValue = {
    inputFilter,
    setInputFilter,
    products,
    setProducts,
    quantityProducts,
    setQuantityProducts
  };


  // const handleFilterPrice = async () => {
  //   const endpoint = `https://wine-back-test.herokuapp.com/products`;
  //   const data = await fetchApi(endpoint);
  //   setAllProducts(data.items)

  //   if (filterPrice === 'everybody') {
  //     handleFetch()
  //   };
  //   const filter = searchPrice(filterPrice, allProducts)
  //   setProducts(filter);
  // };

  // const handleFilterInput = async () => {
  //   const endpoint = `https://wine-back-test.herokuapp.com/products`;
  //   const data = await fetchApi(endpoint);
  //   setAllProducts(data.items)
  
  //   if (inputFilter === '') {
  //     handleFetch()
  //   };
  //   const filter = searchName(inputFilter, allProducts)
  //   setProducts(filter)
  // }

  // useEffect(() => {
  //   handleFilterInput()
  // }, [inputFilter])

  // useEffect(() => {
  //   handleFilterPrice()
  // }, [filterPrice])

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
