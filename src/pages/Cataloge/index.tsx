import { CardList } from "../../components/CardList";
import { Header } from "../../components/Header";
import { Slidebar } from "../../components/Slidebar";
import { ContainerCataloge } from "./styles";

export function Cataloge() {
  return (
    <div>
      <Header />
      <ContainerCataloge>
        <Slidebar />
        <CardList />
      </ContainerCataloge>
    </div>
  )
}
