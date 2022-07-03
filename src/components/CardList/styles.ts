import styled from 'styled-components';

export const Container = styled.div`
  width: 3000px;
  & p {
    font-family: var(--font-family-secondary);
    font-size: 1.125rem;
    color: #262626;
    margin: 0.711rem 0 1rem 6%;
  }
`;

export const ContainerCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  justify-content: center;
`;

export const ButtonsPages = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  margin-bottom: 2.875rem;
  
  & button {
    width: 1.875rem;
    height: 1.875rem;
    margin: 0.375rem;
    background-color: transparent;
    border: 1px solid var(--color-font-price-primary);
    font-family: var(--font-family-secondary);
    color: var(--color-font-price-primary);
    font-size: 1rem;
  }

  & button:hover {
    transition: background-color .3s;
    background-color: var(--color-font-price-primary);
    color: white;
  };

  & button:focus {
    background-color: var(--color-font-price-primary);
    color: white;
  }
`;

