import { ContainerHeader, Navbar, ContentIcons, Filter, Cart, Profile } from './styles';
import logo from '../../images/logo.png';
import profileImg from '../../images/profile.png';
import bag from '../../images/bag.png';
import filterIcon from '../../images/filter.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <ContainerHeader>
      <img src={ logo } alt="wine" />
      <Navbar>
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
