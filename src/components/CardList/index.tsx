import { useEffect, useState } from "react";
import { fetchApi } from "../../utils/fetchApi";
import { formatPrice } from "../../utils/formatDataApi";
import { splitPrice } from "../../utils/splitPrice";
import { Cards } from "../Cards";
import { Container, ContainerCardList } from "./styles";

export function CardList() {
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState('');

  const handleFetch = async () => {
    const data = await fetchApi();
    setQuantityProducts(data.totalItems);
    setProducts(data.items);
  };

  useEffect(() => {
    handleFetch(); 
}, []);

  return (
    <Container>
      <p>{ quantityProducts } produtos encontrados</p>
    <ContainerCardList>
      {
        products.map((product) => {
          return (
            <Cards 
              key={ product.id }
              image={ product.image }
              name={ product.name }
              price={ formatPrice(product.price) }
              discount={ product.discount }
              priceMemberInt={ splitPrice(product.priceMember).priceInt }
              priceMemberPennies={ splitPrice(product.priceMember).pricePennies }
              priceNonMember={ formatPrice(product.priceNonMember) }
            />
          )
          })
      }
    </ContainerCardList>
    </Container>
  )
}
