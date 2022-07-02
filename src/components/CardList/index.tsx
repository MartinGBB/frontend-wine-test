import { formatPrice } from "../../utils/formatDataApi";
import { Cards } from "../Cards";
import { Container, ContainerCardList } from "./styles";

export function CardList() {

  const newFormatPrice = formatPrice(390.9);

  return (
    <Container>
      <p>{ 49 } produtos encontrados</p>
    <ContainerCardList>
      <Cards 
        image="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26453-01.png"
        name={ 'vinho' }
        price={ newFormatPrice }
        discount={ 50 }
        priceMemberInt={ 100 }
        priceMemberPennies={ 99 }
        priceNonMember={ newFormatPrice }
      />
    </ContainerCardList>
    </Container>
  )
}
