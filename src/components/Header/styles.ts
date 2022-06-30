import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--color-card);
  height: 5.5rem;
`;

export const Navbar = styled.nav`
& ul {
  display: flex;
};

& li {
    margin-left: 24px;
    list-style-type: none;
    font-size: var(--font-family-primary);
    font-size: 18px;
  };
`;
