import blackLogo from "../../images/selo.png";
import { 
  ContainerCards,
  ContainerProducts,
  Card,
  Product,
  Description,
  ContentImg,
  Currency,
  ButtonsPages } from './styles';

interface ProductCard {
  image: string;
  name: string;
  price: string;
  discount: number;
  priceMemberInt: string;
  priceMemberPennies: string;
  priceNonMember: string;
};

export function Cards(props: ProductCard) {
  return (
    <ContainerCards>
      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src={ props.image } alt="" />
              <img src={ blackLogo } alt="" />
            </ContentImg>

            <Description>
              <h1>{ props.name }</h1>

              <div className="discount">
                <span>R$ { props.price }</span>
                <span>{ props.discount }% OFF</span>
              </div>

              <div className="partner">
                <span className="title">SÓCIO WINE</span>
                <Currency>
                  <span>R$</span>
                  <span>{ props.priceMemberInt }</span>
                  <span>,{ props.priceMemberPennies }</span>
                </Currency>
                <h2>NÃO SÓCIO R$ { props.priceNonMember }</h2>
              </div>
            </Description>

          </Product>
          <button
            type="button"
          >
            ADICIONAR
          </button>
        </Card>
      </ContainerProducts>
      <ButtonsPages>

      </ButtonsPages>
    </ContainerCards>
  )
}
