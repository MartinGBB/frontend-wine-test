import { Cards } from "../Cards";
import { ContainerCardList } from "./styles";

export function CardList() {
  return (
    <ContainerCardList>
      <p>49 produtos encontrados</p>
      <Cards />
    </ContainerCardList>
  )
}
