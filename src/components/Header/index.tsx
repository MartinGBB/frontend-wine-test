import { ContainerHeader, Navbar, ContentIcons, Filter, Cart, Profile, Menu, LogoWine } from './styles';
import logo from '../../images/logo.png';
import profileImg from '../../images/profile.png';
import bag from '../../images/bag.png';
import filterIcon from '../../images/filter.png';
import menu from '../../images/menu.png';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Hooks/Context';
import { fetchFilterName } from '../../utils/fetchApi';

export function Header() {
  const {
    setQuantityProducts,
    setProducts,
    quantityCart,
  } = useContext(MyContext);

  const [hidden, setHidden] = useState('hidden');
  const [inputValue, setInputValue] = useState('');
  const [filterInputAvailable, setFilterInputAvailable] = useState(false);

  const handleHidden = () => {
    hidden === 'hidden' ? setHidden('none') : setHidden('hidden');
  };

  const handleFilterInputAvailable = () => (
    !filterInputAvailable ? setFilterInputAvailable(true) : setFilterInputAvailable(false)
  );

  const handleFetch = async () => {
    const data = await fetchFilterName(inputValue);
    setQuantityProducts(data.totalItems);
    setProducts(data.items);
  };

  useEffect(() => {
    handleFetch()
  }, [inputValue, quantityCart])

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
          <li><Link to={''}>Loja</Link></li>
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
                value={ inputValue }
                placeholder="Busque seu produto aqui"
                onChange={ ({ target: {value} }) => setInputValue(value) }
              />
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
          <span>{ quantityCart }</span>
        </Cart>
      </ContentIcons>

    </ContainerHeader>
  )
}
