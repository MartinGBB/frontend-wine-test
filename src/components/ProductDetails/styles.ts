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

export const Price = styled.div`
  
`;

export const CommentProduct = styled.div`
  
`;

export const AddCart = styled.div`
  
`;
