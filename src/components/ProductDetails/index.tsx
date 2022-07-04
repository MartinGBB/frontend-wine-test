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

interface Prod {
    id: number;
    image: string;
    name: string;
    price: number;
    discount: number;
    priceMember: number;
    priceNonMember: number;
    type: string;
    classification: string;
    size: string;
    rating: number;
    avaliations: number;
    country: string;
    region: string;
    flag: string;
    sommelierComment: string;
}

export function ProductDetails() {
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { products, setQuantityCart, quantityCart } = useContext(MyContext);
  const { productId } = useParams();

  const handleLess = () => {
    if (quantity === 0) return null;
    setQuantity(quantity - 1);
  };

  const handleMore = () => {
    setQuantity(quantity + 1);
  };

  const handleItemToCart = () => {
    const oldState = quantityCart;
    setQuantityCart(oldState  + quantity)
  };
  
  const handleFetchProduct = () => {
    const productSelected = products.filter(({ id }) => id.toString() === productId)[0];
    setItem(productSelected);
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

            <img src={ item.flag } alt={ item.country} />
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
            <button type="button" onClick={ handleLess }>-</button>
            <span>{ quantity }</span>
            <button type="button" onClick={ handleMore }>+</button>
            <div>
              <button type="button" onClick={ handleItemToCart }>Adicionar</button>
            </div>
          </AddCart>
        </ContainerDescriptionProduct>
      </ContainerProduct>
    </ContainerPage>
  )
}
