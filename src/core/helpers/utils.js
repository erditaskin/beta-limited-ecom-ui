export const defineModule = (title, reducers, routes) => {
  return { title, reducers, routes };
};
export const currencyFormat = (price) => {
  return "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
