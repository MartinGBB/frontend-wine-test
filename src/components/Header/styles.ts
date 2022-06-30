import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--color-card);
  height: 5.5rem;
  border-bottom: 0.5px solid #CCCCCC;
`;

export const Navbar = styled.nav`
& ul {
  display: flex;
  padding: 0;
};

& li {
  margin-right: 48px;
  list-style-type: none;
  font-size: var(--font-family-primary);
  font-size: 18px;
  color: var(--color-font-header);
  };
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.625rem;
`;

export const Cart = styled.div`
  margin-left: 2.8125rem;
  display: flex;
  align-items: center;
`;
