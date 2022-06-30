import { ContainerHeader, Navbar, ContentIcons, Filter, Cart, Profile, Menu, LogoWine } from './styles';
import logo from '../../images/logo.png';
import profileImg from '../../images/profile.png';
import bag from '../../images/bag.png';
import filterIcon from '../../images/filter.png';
import searchIcon from '../../images/search.png';
import menu from '../../images/menu.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../Hooks/Context';

export function Header() {
  const {
    inputFilter,
    setInputFilter,
  } = useContext(MyContext);

  const [hidden, setHidden] = useState('hidden');
  const [filterInputAvailable, setFilterInputAvailable] = useState(false);

  const handleHidden = () => {
    hidden === 'hidden' ? setHidden('none') : setHidden('hidden');
  };

  const handleFilterInputAvailable = () => (
    !filterInputAvailable ? setFilterInputAvailable(true) : setFilterInputAvailable(false)
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
          <li><Link to={''}>Clube</Link></li>
          <li><Link to={'/'}>Loja</Link></li>
          <li><Link to={''}>Produtores</Link></li>
          <li><Link to={''}>Ofertas</Link></li>
          <li><Link to={''}>Eventos</Link></li>
        </ul>
      </Navbar>
  
      <ContentIcons>
        <Filter>

          { 
            filterInputAvailable
            && 
            <div>
              <input
                type="text"
                value={ inputFilter }
                placeholder="Busque seu produto aqui"
                onChange={ ({ target }) => setInputFilter(target.value) }
              />
              <button
                type="button"
                // onClick={  }
              >
                <img src={ searchIcon } alt="buscar" />
              </button>
            </div>
          }
          
          <button
            type="button"
            onClick={ handleFilterInputAvailable }
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
