import { useEffect, useState } from "react";
import { fetchApi } from "../../utils/fetchApi";
import { formatPrice } from "../../utils/formatDataApi";
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

  // const newFormatPrice = formatPrice(390.9);

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
              priceMemberInt={ product.priceMember }
              priceMemberPennies={ product.priceMember }
              priceNonMember={ formatPrice(product.priceNonMember) }
            />
          )
          })
      }
    </ContainerCardList>
    </Container>
  )
}
