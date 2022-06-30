import { ContainerHeader, Navbar, ContentIcons, Filter, Cart, Profile, Menu, LogoWine } from './styles';
import logo from '../../images/logo.png';
import profileImg from '../../images/profile.png';
import bag from '../../images/bag.png';
import filterIcon from '../../images/filter.png';
import menu from '../../images/menu.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const [hidden, setHidden] = useState('hidden');
  const [filterInput, setFilterInput] = useState(false);

  const handleHidden = () => {
    hidden === 'hidden' ? setHidden('none') : setHidden('hidden');
  };

  const handleFilterInput = () => (
    !filterInput ? setFilterInput(true) : setFilterInput(false)
  );

  return (
    <ContainerHeader>
      <Menu
        type="button"
        onClick={ handleHidden }
      >
        <img src={ menu } alt="menu" />
      </Menu>

      <LogoWine src={ logo } alt="wine" />
      <Navbar visibilityNav={ hidden }>
        <ul>
          <li>Clube</li>
          <li>Loja</li>
          <li>Produtores</li>
          <li>Ofertas</li>
          <li>Eventos</li>
        </ul>
      </Navbar>
  
      <ContentIcons>
        <Filter available={ filterInput }>

          { filterInput && <input type="text" /> }
          
          <button
            type="button"
            onClick={ handleFilterInput }
          >
            <img src={ filterIcon } alt="filter" />
          </button>
        </Filter>
  
        <Profile>
          <Link to={''} />
          <img src={ profileImg } alt="profile" />
        </Profile>

        <Cart>
          <Link to={''} />
          <img src={ bag } alt="cart" />
        </Cart>
      </ContentIcons>

    </ContainerHeader>
  )
}
