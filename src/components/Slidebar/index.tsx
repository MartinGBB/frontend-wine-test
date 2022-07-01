import { ContainerSlidebar } from './styles';

export function Slidebar() {
  return (
    <ContainerSlidebar>
      <h1>Refine sua busca</h1>
      <h2>Por preço</h2>
      <ul>
        <li><input type="radio" />Até R$40</li>
        <li><input type="radio" />R$40 A R$60</li>
        <li><input type="radio" />R$100 A R$200</li>
        <li><input type="radio" />R$200 A R$500</li>
        <li><input type="radio" />Acima de R$500</li>
      </ul>
    </ContainerSlidebar>
  )
};
