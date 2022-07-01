import { 
  ContainerCards,
  ContainerProducts,
  Card,
  Product,
  Description,
  ContentImg,
  ButtonsPages } from './styles';

export function Cards() {
  return (
    <ContainerCards>
      <p>49 produtos encontrados</p>
  
      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src="" alt="" />
              <img src="" alt="" />
            </ContentImg>

            <Description>
              <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>

              <div className="discount">
                <span>R$ 37,40</span>
                <span>60% OFF</span>
              </div>

              <div className="partner">
                <span>Sócio wine</span>
                <span>R$ 30,00</span>
                <h2>Não sócio R$ 37,40</h2>
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
