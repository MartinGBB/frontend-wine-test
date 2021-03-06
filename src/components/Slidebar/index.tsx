import { useContext, useEffect, useState } from 'react';
import { fetchFilterPrice } from '../../utils/fetchApi';
import { MyContext } from '../Hooks/Context';
import { ContainerSlidebar, ListPriece } from './styles';

export function Slidebar() {
  const { setProducts, setQuantityProducts } = useContext(MyContext);

  const [filterPrice, setFilterPrice] = useState("0-1000");

  // referencia do tipo de target:
  // https://www.wake-up-neo.com/pt/reactjs/entrada-de-typescript-onchange-event.target.value/829447927/
  
  const handleChecked = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    return setFilterPrice(value);
  };

  const handleFetchFilter = async () => {
    const data = await fetchFilterPrice(filterPrice)
    setQuantityProducts(data.totalItems)
    setProducts(data.items);
  };
    
  useEffect(() => {
    handleFetchFilter()
  }, [filterPrice]);
  

  return (
    <ContainerSlidebar>
      <h1>Refine sua busca</h1>
      <h2>Por preço</h2>
      <ListPriece>
      <label htmlFor="0">
          <input
            type="radio"
            id="0"
            name="priceFilter"
            value="0-1000"
            checked={ filterPrice === "0-1000" ? true : false }
            onChange={ handleChecked }
          />
          Todos
        </label>

        <label htmlFor="1">
          <input
            type="radio"
            id="1"
            name="priceFilter"
            value="0-40"
            checked={ filterPrice === "0-40" ? true : false }
            onChange={ handleChecked }
          />
          Até R$40
        </label>

        <label htmlFor="2">
          <input
            type="radio"
            id="2"
            name="priceFilter"
            value="40-60"
            checked={ filterPrice === "40-60" ? true : false }
            onChange={ handleChecked }
            />
          R$40 A R$60
        </label>

        <label htmlFor="3">
          <input
            type="radio"
            id="3"
            name="priceFilter"
            value="100-200"
            checked={ filterPrice === "100-200" ? true : false }
            onChange={ handleChecked }
            />
          R$100 A R$200
        </label>
  
        <label htmlFor="4">
          <input
            type="radio"
            id="4"
            name="priceFilter"
            value="200-500"
            checked={ filterPrice === "200-500"  ? true : false }
            onChange={ handleChecked }
            />
          R$200 A R$500
        </label>

        <label htmlFor="5">
          <input
            type="radio"
            id="5"
            name="priceFilter"
            value="500-1000"
            checked={ filterPrice === "500-1000" ? true : false }
            onChange={ handleChecked }
            />
          Acima de R$500
        </label>
      </ListPriece>
    </ContainerSlidebar>
  )
};
