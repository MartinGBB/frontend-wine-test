import { Routes, Route } from "react-router-dom";
import { Cataloge } from "../pages/Cataloge";
import { Product } from "../pages/Product";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Cataloge /> } />
      <Route path=":product" element={ <Product /> } />
    </Routes>
  );
}
