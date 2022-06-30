import styled from 'styled-components';

interface MenuHidden {
  visibilityNav: 'none' | 'hidden';
}

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--color-card);
  height: 5.5rem;
  border-bottom: 0.5px solid #CCCCCC;
`;


export const Menu = styled.button`
  @media (min-width: 1000px) {
  visibility: hidden;

  }
  visibility: none;
`;

export const Navbar = styled.nav<MenuHidden>`

@media (max-width: 1000px) {
  visibility: ${(({ visibilityNav }) => visibilityNav)};

}

& ul {
  @media (max-width: 1000px) {
  display: block;
  position: fixed;

  top: 40px;
  left: 0;

  
  }

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
