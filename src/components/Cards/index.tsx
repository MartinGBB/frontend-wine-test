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

export function Cards() {
  return (
    <ContainerCards>
      {/* <p>49 produtos encontrados</p> */}
  
      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src="" alt="" />
              <img src={ blackLogo } alt="" />
            </ContentImg>

            <Description>
              <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>

              <div className="discount">
                <span>R$ 37,40</span>
                <span>60% OFF</span>
              </div>

              <div className="partner">
                <span className="title">Sócio wine</span>
                <Currency>
                  <span>R$</span>
                  <span>30</span>
                  <span>,00</span>
                </Currency>
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

      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src="" alt="" />
              <img src={ blackLogo } alt="" />
            </ContentImg>

            <Description>
              <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>

              <div className="discount">
                <span>R$ 37,40</span>
                <span>60% OFF</span>
              </div>

              <div className="partner">
                <span className="title">Sócio wine</span>
                <Currency>
                  <span>R$</span>
                  <span>30</span>
                  <span>,00</span>
                </Currency>
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

      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src="" alt="" />
              <img src={ blackLogo } alt="" />
            </ContentImg>

            <Description>
              <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>

              <div className="discount">
                <span>R$ 37,40</span>
                <span>60% OFF</span>
              </div>

              <div className="partner">
                <span className="title">Sócio wine</span>
                <Currency>
                  <span>R$</span>
                  <span>30</span>
                  <span>,00</span>
                </Currency>
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

      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src="" alt="" />
              <img src={ blackLogo } alt="" />
            </ContentImg>

            <Description>
              <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>

              <div className="discount">
                <span>R$ 37,40</span>
                <span>60% OFF</span>
              </div>

              <div className="partner">
                <span className="title">Sócio wine</span>
                <Currency>
                  <span>R$</span>
                  <span>30</span>
                  <span>,00</span>
                </Currency>
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

      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src="" alt="" />
              <img src={ blackLogo } alt="" />
            </ContentImg>

            <Description>
              <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>

              <div className="discount">
                <span>R$ 37,40</span>
                <span>60% OFF</span>
              </div>

              <div className="partner">
                <span className="title">Sócio wine</span>
                <Currency>
                  <span>R$</span>
                  <span>30</span>
                  <span>,00</span>
                </Currency>
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

      <ContainerProducts>
        <Card>
          <Product>
            <ContentImg>
              <img src="" alt="" />
              <img src={ blackLogo } alt="" />
            </ContentImg>

            <Description>
              <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>

              <div className="discount">
                <span>R$ 37,40</span>
                <span>60% OFF</span>
              </div>

              <div className="partner">
                <span className="title">Sócio wine</span>
                <Currency>
                  <span>R$</span>
                  <span>30</span>
                  <span>,00</span>
                </Currency>
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
