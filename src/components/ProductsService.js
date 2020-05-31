const ProductsService = (() => {
  const getProducts = async () => {
    const products = await fetch("/api/products").then((response) => {
      console.log(response);
      return response.json();
    });

    console.log(products);

    return products;
  };
  return {
    getProducts: getProducts,
  };
})();
export default ProductsService;
