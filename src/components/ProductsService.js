const ProductsService = (() => {
  const getProducts = async () => {
    const products = await fetch("/api/products").then((response) => {
      return response.json();
    });

    return products;
  };
  return {
    getProducts: getProducts,
  };
})();
export default ProductsService;
