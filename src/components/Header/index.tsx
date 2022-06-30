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

  const handleHidden = () => {
    hidden === 'hidden' ? setHidden('none') : setHidden('hidden');
  }

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
        <Filter>
          <Link to={''} />
          <img src={ filterIcon } alt="filter" />
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
