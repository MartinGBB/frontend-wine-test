export const fetchApi = async (endpoint: string) => {
  try {
    const data = await (await fetch(endpoint)).json();
    return data;
  } catch ({ message }) {
    alert(message)
  };
};
