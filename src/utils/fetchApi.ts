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
