import styled from 'styled-components';

export const ContainerCards = styled.div`

`;

export const ContainerProducts = styled.div`
  @media (max-width: 570px) {
    width: 14.5rem;
  };

  @media (max-width: 500px) {
    width: 12.6rem;
  };

  width: 17.06rem;
  height: auto;
  margin-bottom: 0px;
`;

export const Card = styled.div`
  @media (max-width: 500px) {
    margin: 0.6rem;
  };
  margin: 1rem;
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

  & button:active {
    padding: 0.7rem 1.461rem;
  }
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
    width: 120px;
    height: 170.13px;
};

& img:last-child {
  @media (max-width: 570px) {
    bottom: 4.43px;
    right: 135px;
  };
  @media (max-width: 500px) {
    bottom: 4.43px;
    right: 113px;
  };
  
    z-index: 2;
    position: absolute;
    bottom: 8.43px;
    right: 1px;
    width: 38.94px;
    height: 38.94px;
    border-radius: 50%;
  };
`;
