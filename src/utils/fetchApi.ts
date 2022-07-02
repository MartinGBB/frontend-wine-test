export const fetchApi = async (page: string) => {
  try {
    const endpoint = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`
    const data = await (await fetch(endpoint)).json();
    return data;
  } catch ({ message }) {
    alert(message)
  };
};
