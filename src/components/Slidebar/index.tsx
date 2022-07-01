import { ContainerSlidebar, ListPriece } from './styles';

export function Slidebar() {
  return (
    <ContainerSlidebar>
      <h1>Refine sua busca</h1>
      <h2>Por preço</h2>
      <ListPriece>
        <label htmlFor="1">
          <input
            type="radio"
            id="1"
            name="priceFilter"
            value=""
          />
          Até R$40
        </label>

        <label htmlFor="2">
          <input
            type="radio"
            id="2"
            name="priceFilter"
            value=""
            />
          R$40 A R$60
        </label>

        <label htmlFor="3">
          <input
            type="radio"
            id="3"
            name="priceFilter"
            value=""
            />
          R$100 A R$200
        </label>
  
        <label htmlFor="4">
          <input
            type="radio"
            id="4"
            name="priceFilter"
            value=""
            />
          R$200 A R$500
        </label>

        <label htmlFor="">
          <input
            type="radio"
            id="5"
            name="priceFilter"
            value=""
            />
          Acima de R$500
        </label>
      </ListPriece>
    </ContainerSlidebar>
  )
};
