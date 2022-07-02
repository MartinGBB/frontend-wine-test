import { useEffect } from "react";
import { fetchApi } from "../../utils/fetchApi";
import { formatPrice } from "../../utils/formatDataApi";
import { Cards } from "../Cards";
import { Container, ContainerCardList } from "./styles";

export function CardList() {
  const handleFetch = async () => {
    const data = await fetchApi()
    return data;
  };

  useEffect(() => {
    handleFetch();   
}, []);

  console.log(data)
  const newFormatPrice = formatPrice(390.9);

  return (
    <Container>
      <p>{ 49 } produtos encontrados</p>
    <ContainerCardList>
      {
        data.map((item) => ( 
          <Cards 
          key={ item.id }
          image={ item }
          name={ item }
          price={ item }
          discount={ item }
          priceMemberInt={ item }
          priceMemberPennies={ item }
          priceNonMember={ item }
          />
          )
        )
      };
    </ContainerCardList>
    </Container>
  )
}
