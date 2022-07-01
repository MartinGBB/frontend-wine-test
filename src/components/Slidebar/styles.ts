import styled from 'styled-components';

export const ContainerSlidebar = styled.div`
  @media (max-width: 800px) {
    visibility: hidden;
    width: 0;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 28rem;
`;