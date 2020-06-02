const ProductsService = (() => {
  const getProducts = async () => {
    const products = await fetch("/api/products").then((response) => {
      return response.json();
    });

    return products;
  };
  const addProduct = async (product) => {
    console.log(product);
    console.log(JSON.stringify(product));

    const products = await fetch("/api/product", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(product),
    }).then((response) => {
      console.log(response);
    });

    return products;
  };
  return {
    getProducts: getProducts,
    addProduct: addProduct,
  };
})();
export default ProductsService;
