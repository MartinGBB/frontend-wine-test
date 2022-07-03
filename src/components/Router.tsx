import { Routes, Route } from "react-router-dom";
import { Cataloge } from "../pages/Cataloge";
import { Product } from "../pages/Product";

export function Router() {
  return (
    <Routes>
      <Route path="/cataloge" element={ <Cataloge /> } />
      <Route path="/cataloge/:page" element={ <Cataloge /> } />
      <Route path="product/:product" element={ <Product /> } />
    </Routes>
  );
}
