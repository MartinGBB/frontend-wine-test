import styled from 'styled-components';

interface MenuHidden {
  visibilityNav: string;
}

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--color-card);
  height: 5.5rem;
  border-bottom: 0.5px solid #CCCCCC;
`;

export const LogoWine = styled.img`
  @media (max-width: 1000px) {
      width: 5rem;
  }
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
  };

  & ul {
    @media (max-width: 1000px) {
      display: block;
      position: fixed;
      padding: 0;
      top: 71px;
      left: 0;
      background-color: #FFFFFF;
      padding: 40px;
      flex-direction: column;
      height: 100vh;
      border-radius: 0 5px 5px 0;
    };

    display: flex;
  };
    
  & li {
    @media (max-width: 1000px) {
      padding: 15px;
    };

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

  & img {
    @media (max-width: 1000px) {
      width: 2.5rem;
    };
  };
`;

export const Filter = styled.div`
  @media (max-width: 1000px) {
    margin-left: 0;
  }
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  @media (max-width: 1000px) {
    visibility: hidden;
    width: 0;
  }
  display: flex;
  align-items: center;
  margin-left: 2.625rem;
`;

export const Cart = styled.div`
  @media (max-width: 1000px) {
    margin-left: 0;
  }
  margin-left: 2.8125rem;
  display: flex;
  align-items: center;
`;
