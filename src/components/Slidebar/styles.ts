import styled from 'styled-components';

export const ContainerSlidebar = styled.div`
  @media (max-width: 800px) {
    visibility: hidden;
    width: 0;
    margin: 0;
  };

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 20rem;

  & h1 {
    font-family: var(--font-family-primary);
    font-size: 20px;
    color: #262626;
  };

  & h2 {
    font-family: var(--font-family-secondary);
    font-size: 18px;
    color: #333333;
  };
`;

export const ListPriece = styled.div`
  padding: 0;
  
  & label {
    display: block;
    color: var(--color-font-slidebar);
    list-style-type: none;
    height: 2.625rem;
  };
  
  & input {
    margin: 0;
    margin-right: 0.81rem;
    width: 0.99rem;
  };
`;
