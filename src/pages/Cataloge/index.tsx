import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Slidebar } from "../../components/Slidebar";
import { ContainerCataloge } from "./styles";

export function Cataloge() {
  return (
    <div>
      <Header />
      <ContainerCataloge>
        <Slidebar />
        <Cards />
      </ContainerCataloge>
    </div>
  )
}
