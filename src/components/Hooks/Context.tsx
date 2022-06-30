import { createContext } from "react";

interface ContextState {
  inputFilter: string;
  setInputFilter: (value: string) => void;
}


export const MyContext = createContext({} as ContextState);

// referencia do setState: https://stackoverflow.com/questions/65823778/how-can-i-define-typescript-type-for-a-setstate-function-when-react-dispatchrea
