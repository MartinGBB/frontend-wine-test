const ENDPOINT = `https://wine-back-test.herokuapp.com/products?`


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
    return data;
  } catch ({ message }) {
    alert(message)
  };
};

export const fetchFilterName = async (name: string | undefined) => {
  try {
    const data = await (await fetch(`${ENDPOINT}name=${name}`)).json();
    return data;
  } catch ({ message }) {
    alert(message)
  };
};
