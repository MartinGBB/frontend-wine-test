import { ContainerHeader, Navbar } from './styles';
import logo from '../../images/logo.png';

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
    </ContainerHeader>
  )
}
