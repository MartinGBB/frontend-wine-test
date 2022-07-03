export const searchPrice = (filterPrice: string | undefined, pricesApi: string[]) => {
  switch (filterPrice) {
    case "<40":
      return pricesApi?.filter(({ price }: number | any) => Number(price) < 40);
    
    case "40-60":
      return pricesApi?.filter(({ price }: number | any) => Number(price) >= 40 && Number(price) <= 60);

    case "100-200":
      return pricesApi?.filter(({ price }: number | any) => Number(price) >= 100 && Number(price) <= 200);

    case "200-500":
      return pricesApi?.filter(({ price }: number | any) => Number(price) >= 200 && Number(price) <= 500);

    case ">500":
      return pricesApi?.filter(({ price }: number | any) => Number(price) >= 500);

    default:
      return pricesApi
  }
};
