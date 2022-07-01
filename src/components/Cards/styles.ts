import styled from 'styled-components';

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  & p {
    font-family: var(--font-family-secondary);
    font-size: 1.125rem;
    color: #262626;
    margin-top: 0.711rem;
  }
`;

export const ContainerProducts = styled.div`
  width: 256px;
  height: 333px;
`;

export const Card = styled.div`

`;

export const Product = styled.div`

`;

export const Description = styled.div`
  margin: auto;
  justify-content: center;
  text-align: center;

  & h1 {
    font-size: 1rem;
    font-family: var(--font-family-secondary);
    color: var(--color-font-slidebar);
  };

  & .discount {
    margin: auto;
    padding: 5px;
    justify-content: center;
    font-weight: 700;
    font-size: 0.6875rem;
    font-family: var(--font-family-secondary);
    
    & span:first-child {
      text-decoration: line-through;
      color: #888888;
    };

    & span:last-child {
      padding: 0.5px 4px;
      background-color: #F79552;
      border-radius: 1.95px;
      margin-left: 0.337rem;
      color: #FFFFFF;
    };
  };

  & .partner {
    margin: auto;
    font-family: var(--font-family-secondary);
    font-size: 0.687rem;
    
    & .title {
      font-weight: 700;
      color: var(--color-font-slidebar);
      
    };
  }
`;

export const Currency = styled.span`
  color: var(--color-font-price-primary);
  margin-left: 0.337rem;
  font-weight: 700;

& span:nth-child(2) {
    color: var(--color-font-price-primary);
    font-size: 1.5rem;
  };
`;

export const ContentImg = styled.div`

`;

export const ButtonsPages = styled.div`

`;
