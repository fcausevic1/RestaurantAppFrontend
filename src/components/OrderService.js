const OrderService = (() => {
  const getOrders = async () => {
    const orders = await fetch("/api/orders").then((response) => {
      return response.json();
    });

    return orders;
  };

  const removeOrder = async (order) => {
    const orders = await fetch("/api/order/" + order.id, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
    });

    return orders;
  };

  return {
    getOrders: getOrders,
    removeOrder: removeOrder,
  };
})();
export default OrderService;
