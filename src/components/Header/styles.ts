import styled from 'styled-components';

interface MenuHidden {
  visibilityNav: string;
}

interface FilterAvailable {
  available: boolean;
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

  background-color: transparent;
  border: transparent;
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
    
    & a {
      font-size: var(--font-family-primary);
      font-size: 18px;
      color: var(--color-font-header);
      text-decoration: dashed;
    };

    & a:hover, a:focus {
      @media (max-width: 1000px) {
        border-bottom: 1px solid var(--color-font-select-header);
        padding-bottom: 2px;
      };

      color: var(--color-font-select-header);
      padding-bottom: 27px;
      border-bottom: 2px solid var(--color-font-select-header);
    };
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

export const Filter = styled.div<FilterAvailable>`
  @media (max-width: 1000px) {
    margin-left: 0;
  }
  display: flex;
  align-items: center;

  & img {
    width: ${(({ available }) => available ? '30px' : '')};
  }

  & button {
    background-color: transparent;
    border: transparent;
  }

  & input {
    border: 0.5px solid;
    border-radius: 5px;
    padding: 4px;
    width: 6rem;
  }

  & input:focus {
    border: 1.5px solid;
    outline: 6px;
  }
`;

export const Profile = styled.div`
  @media (max-width: 1000px) {
    visibility: hidden;
    width: 0;
    margin: 0;
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
