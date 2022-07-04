import { Header } from "../../components/Header";
import { ProductDetails } from "../../components/ProductDetails";
import { ContainerProduct } from "./styles";

export function Product() {
  return (
    <div>
      <Header />
      <ContainerProduct>
        <ProductDetails />
      </ContainerProduct>
    </div>
  )
}
