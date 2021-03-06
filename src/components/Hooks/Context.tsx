import { createContext } from "react";

interface ContextState {
  products: {
    id: number;
    image: string;
    name: string;
    price: number;
    discount: number;
    priceMember: number;
    priceNonMember: number;
    type: string;
    classification: string;
    size: string;
    rating: number;
    avaliations: number;
    country: string;
    region: string;
    flag: string;
    sommelierComment: string;
  }[];
  setProducts: (value: string) => void;
  quantityProducts: number;
  setQuantityProducts: (value: number) => void;
  quantityCart: number;
  setQuantityCart: (value: number) => void;
}


export const MyContext = createContext({} as ContextState);

// referencia do setState: https://stackoverflow.com/questions/65823778/how-can-i-define-typescript-type-for-a-setstate-function-when-react-dispatchrea
