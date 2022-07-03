import { Link } from "react-router-dom";
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
  return (
    <ContainerPage>
      <span>{' < '}</span>
      <Link to={'/cataloge'}>Voltar</Link>
  
      <ContainerProduct>
        <ContainerImage>
          <img src="" alt="" />
        </ContainerImage>

        <ContainerDescriptionProduct>

          <SectionProduct>
            <span>Vinhos</span>
            <span>{' > '}</span>
            <span>Estados Unidos</span>
            <span>{' > '}</span>
            <span>California</span>

            <h1>Apothic Red 2019</h1>

            <img src="" alt="" />
            <span>Estados Unidos</span>
            <span>Tinto</span>
            <span>Meio Seco</span>
            <span>750ml</span>
            <span>Rating</span>
            <span>(2)</span>

          </SectionProduct>

          <div>
            <PriceMember>
              <span>R$ </span>
              <span>63</span>
              <span>,67</span>
            </PriceMember>

            <PriceNonMember>
              <span>NÂO SOCIO R$ 120,95/UN</span>
            </PriceNonMember>
          </div>

          <CommentProduct>
            <h3>Comentario do Sommelier</h3>
            <p>
            Produzido no terroir californiano, esse tinto mescla as variedades Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho inspirado nas antigas Apothecas (adegas subterrâneas), um lugar misterioso onde há mais de 800 anos os viticultores misturavam e armazenavam seus cobiçados vinhos.
            </p>
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
