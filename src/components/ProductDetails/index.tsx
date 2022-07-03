import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { splitPrice } from "../../utils/splitPrice";
import { MyContext } from "../Hooks/Context";

import {
  ContainerPage,
  ContainerProduct,
  ContainerImage,
  ContainerDescriptionProduct,
  SectionProduct,
  PriceMember,
  PriceNonMember,
  CommentProduct,
  AddCart
} from "./styles";

export function ProductDetails() {
  const [item, setItem] = useState([]);

  const { productId } = useParams();
  const { products } = useContext(MyContext);
  
  const handleFetchProduct = () => {
    const productSelected = products.filter(({ id }) => id.toString() === productId);
    setItem(productSelected[0]);
  }
    
    useEffect(() => {
      handleFetchProduct()
    }, [])

  return (
    <ContainerPage>
      <span>{' < '}</span>
      <Link to={'/'}>Voltar</Link>

      <ContainerProduct>
        <ContainerImage>
          <img src={ item.image } alt="" />
        </ContainerImage>

        <ContainerDescriptionProduct>

          <SectionProduct>
            <span>Vinhos</span>
            <span>{' > '}</span>
            <span>{ item.country }</span>
            <span>{' > '}</span>
            <span>{ item.region }</span>

            <h1>{ item.name }</h1>

            <img src='' alt="" />
            <span>{ item.country }</span>
            <span>{ item.type }</span>
            <span>{ item.classification }</span>
            <span>{ item.volume }</span>
            <span>{ item.rating }</span>
            <span>{ `(${item.avaliations})` }</span>

          </SectionProduct>

          <div>
            <PriceMember>
              <span>R$ </span>
              {/* <span>{ splitPrice(item.priceMember).priceInt }</span>
              <span>,{ splitPrice(item.priceMember).pricePennies }</span> */}
            </PriceMember>

            <PriceNonMember>
              {/* <span>NÂO SOCIO R$ { formatPrice(item.priceNonMember) }/UN</span> */}
            </PriceNonMember>
          </div>

          <CommentProduct>
            <h3>Comentario do Sommelier</h3>
            <p>{ item.sommelierComment }</p>
          </CommentProduct>

          <AddCart>
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
            <div>
              <button type="button">Adicionar</button>
            </div>
          </AddCart>
        </ContainerDescriptionProduct>
      </ContainerProduct>
    </ContainerPage>
  )
}
