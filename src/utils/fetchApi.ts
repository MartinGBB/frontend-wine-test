const ENDPOINT = `https://wine-back-test.herokuapp.com/products?`
// page=${nextPage}&limit=9`


export const fetchAllProducts = async (page: string) => {
  try {
    const limitItems = `9` 
    const data = await (await fetch(`${ENDPOINT}page=${page}&limit=${limitItems}`)).json();
    return data;
  } catch ({ message }) {
    alert(message)
  };
};

export const fetchFilterPrice = async (price: string | undefined) => {
  try {
    const data = await (await fetch(`${ENDPOINT}filter=${price}`)).json();
    console.log(data)
    return data;
  } catch ({ message }) {
    alert(message)
  };
};
