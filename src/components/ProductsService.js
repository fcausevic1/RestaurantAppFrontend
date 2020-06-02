

const ProductsService = (() => {
  const getProducts = async () => {
    const products = await fetch("/api/products").then((response) => {
      return response.json();
    });
    return products;
  };

  const getUsers = async () => {
    const users = await fetch("/api/users").then((response) => {
      return response.json();
    });
    return users;
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

  const removeProduct = async (product) => {
    console.log("P", product);

    const products = await fetch("/api/product/" + product.id, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
    });

    return products;
  };

  return {
    getProducts: getProducts,
    getUsers: getUsers,
    addProduct: addProduct,
    removeProduct: removeProduct,
  };
})();
export default ProductsService;
