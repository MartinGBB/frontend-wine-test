import styled from 'styled-components';

export const ContainerPage = styled.div`
  width: 100%;

`;

export const ContainerProduct = styled.div`
    display: flex;

  `;

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  & img {

    
  };
  `;

export const ContainerDescriptionProduct = styled.div`
  width: 50%;
  
`;

export const SectionProduct = styled.div`
    margin-bottom: 2rem;

    & span {
      font-family: var(--font-family-secondary);
      font-weight: 400;
      color: var(--color-font-price-secoundary);
      font-size: 0.875rem;
      margin-right: 0.5rem;
    };
    
    & span:nth-child(1), span:nth-child(3) {
      color: #C81A78;
      font-weight: 400;
    };
    
    & span:nth-child(5) {
      color: var(--color-font-price-secoundary);
      font-weight: 400;
    };

    & h1 {
      font-family: var(--font-family-primary);
      color: #111111;
      margin: 0.7rem 0;
    };

    & span:nth-child(n + 6) {
      color: var(--color-font-header);
    };

`;

export const PriceMember = styled.div`
  font-family: var(--font-family-secondary);
  font-weight: 700;

  & span {
    color: #C81A78;
    font-size: 1.3rem;
  }

  & span:nth-child(2) {
    font-size: 2.8rem;
  }
`;

export const PriceNonMember = styled.div`
  & span {
  color: var(--color-font-price-secoundary);
  font-family: var(--font-family-secondary);
  font-size: 1.3rem;
  font-weight: 700;
  }
`;

export const CommentProduct = styled.div`
  margin-top: 2.8rem;
  font-family: var(--font-family-primary);

  & h3 {
    font-size: 16px;
    color: #111111;
  };

  & p {
    font-size: 0.875rem;
    color: #666666;
  }
`;

export const AddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20.5rem;
  background-color: var(--color-button);
  border-radius: 4px;
  color: white;
  font-family: var(--font-family-secondary);
  font-size: 24px;
  
  & button {
    color: white;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 50%;
    font-family: var(--font-family-secondary);
      font-weight: 700;
      font-size: 1rem;
  }

  & button:active {
    font-size: 0.8rem;
  }

  & div {
    display: flex;

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 9rem;
      height: 3.5rem;
      border: none;
      color: white;
      background-color: transparent;
      font-family: var(--font-family-secondary);
      font-weight: 700;
      font-size: 1rem;
    };
  };
`;
