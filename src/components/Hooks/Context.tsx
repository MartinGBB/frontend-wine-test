import { createContext } from "react";

interface ContextState {
  inputFilter: string | undefined;
  setInputFilter: (value: string) => void;
  filterPrice: string | undefined;
  setFilterPrice: (value: string) => void;

  products: [] | any;
  setProducts: (value: string) => void;
  quantityProducts: number | undefined;
  setQuantityProducts: (value: string) => void;
  nextPage: string | undefined;
  setNextPage: (value: string) => void;
}


export const MyContext = createContext({} as ContextState);

// referencia do setState: https://stackoverflow.com/questions/65823778/how-can-i-define-typescript-type-for-a-setstate-function-when-react-dispatchrea
