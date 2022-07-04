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
  @media (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const LogoWine = styled.img`
  @media (max-width: 960px) {
      width: 5rem;
      margin: 0 1px 0 60px;

  }
`;

export const Menu = styled.button`
  @media (min-width: 960px) {
    visibility: hidden;
  }

  background-color: transparent;
  border: transparent;
  position: absolute;
  left: 15px;
  top: 35px;
`;

export const Navbar = styled.nav<MenuHidden>`
  @media (max-width: 960px) {
    visibility: ${(({ visibilityNav }) => visibilityNav)};
  };

  & ul {
    @media (max-width: 960px) {
      display: block;
      position: absolute;
      padding: 0;
      top: 71px;
      left: 0;
      background-color: #FFFFFF;
      padding: 40px;
      flex-direction: column;
      height: 100vh;
      border-radius: 0 5px 5px 0;
      z-index: 3;
    };

    display: flex;
  };
    
  & li {
    @media (max-width: 960px) {
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
      @media (max-width: 960px) {
        border-bottom: 1px solid var(--color-font-select-header);
        padding-bottom: 2px;
      };

      color: var(--color-font-select-header);
      padding-bottom: 28px;
      border-bottom: 2px solid var(--color-font-select-header);
    };
  };
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;

  & img {
    @media (max-width: 960px) {
      width: 2.5rem;
    };
  };
`;

export const Filter = styled.div`
  @media (max-width: 960px) {
    margin-left: 0;
  }
  display: flex;
  align-items: center;
  
  & button {
    cursor: pointer;
    background-color: transparent;
    border: transparent;
  }

  & div {
    position: absolute;
    top: 89px;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    background-color: white;
    justify-content: center;
  }

  & input {
    border: 0.5px solid var(--color-font-header);;
    border-radius: 5px;
    padding: 8px;
    margin: 8px 8px;
    width: 83vw;
  }

  & input:focus {
    border: 1.5px solid;
    outline: 6px;
  }

  & .search {
    width: auto;
  }

  & button:active {
    position: relative;
    top: 0.5px;
  }
`;

export const Profile = styled.div`
  @media (max-width: 960px) {
    margin: 0;
  };

  display: flex;
  align-items: center;
  margin-left: 2.625rem;
  cursor: pointer;
`;

export const Cart = styled.div`
  @media (max-width: 960px) {
    margin: 0 20px 0 10px;
  };

  margin-left: 2.8125rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    z-index: 2;
    position: absolute;
  }

  & span {
    background-color: white;
    border-radius: 50%;
    position: relative;
    top: 19px;
    left: 37px;
    width: 20px;
    height: 20px;
    color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    font-size: 1rem;
    font-weight: 700;
    font-family: var(--font-family-secondary);
    color: #4FBFA5;
  }
`;
