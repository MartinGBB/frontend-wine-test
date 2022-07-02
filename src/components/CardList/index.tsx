import { useEffect, useState } from "react";
import { fetchApi } from "../../utils/fetchApi";
import { formatPrice } from "../../utils/formatDataApi";
import { splitPrice } from "../../utils/splitPrice";
import { Cards } from "../Cards";
import { Container, ContainerCardList, ButtonsPages } from "./styles";

interface ProductsApi {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
}

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
        products.map((product: ProductsApi) => {
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
    <ButtonsPages>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
    </ButtonsPages>
    </Container>
  )
}
