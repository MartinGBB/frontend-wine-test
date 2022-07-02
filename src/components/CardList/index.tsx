import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [nextPage, setNextPage] = useState('1');

  const navigation = useNavigate();
  const handleNextPage = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setNextPage(value);
    window.scrollTo({top: 0, behavior: 'smooth'});
    navigation(`/cataloge/page-${value}`);
  }
  
  const handleFetch = async () => {
    const data = await fetchApi(nextPage);
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
      <button type="button" value="1" onClick={ handleNextPage }>1</button>
      <button type="button" value="2" onClick={ handleNextPage }>2</button>
      <button type="button" value="3" onClick={ handleNextPage }>3</button>
      <button type="button" value="4" onClick={ handleNextPage }>4</button>
      <button type="button" value="5" onClick={ handleNextPage }>5</button>
      <button type="button" value="6" onClick={ handleNextPage }>6</button>
      <button type="button" value="7" onClick={ handleNextPage }>7</button>
    </ButtonsPages>
    </Container>
  )
}
