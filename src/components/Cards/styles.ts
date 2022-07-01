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
    margin-bottom: 2rem;
  }
`;

export const ContainerProducts = styled.div`
  width: 256px;
  height: 333px;
`;

export const Card = styled.div`

  & button {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 1rem;
    width: 100%;
    padding: 0.731rem 1.461rem;
    background-color: var(--color-button);
    border: none;
    color: var(--color-card);
    font-size: 0.875rem;
    font-weight: 700;
    font-family: var(--color-font-price-secoundary);
  };
`;

export const Product = styled.div`
  background-color: var(--color-card);
  padding: 1rem;
  border: 0.5px solid var(--color-card);
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
    padding: 0.438rem;
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

    & h2 {
      color: #888888;
      font-size: 0.75rem;
    };
  };
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
  display: flex;
  margin: auto;
  justify-content: center;
  position: relative;

  & img:first-child {
    width: 198.57px;
    height: 178.13px;
  };

  & img:last-child {
    position: absolute;
    bottom: 8.43px;
    right: 1px;
    width: 38.94px;
    height: 38.94px;
    border-radius: 50%;
  };
`;

export const ButtonsPages = styled.div`

`;
