import styled from 'styled-components';

export const Container = styled.div`
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
