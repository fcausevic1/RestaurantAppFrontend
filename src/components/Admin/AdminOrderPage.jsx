import React, { useState, useEffect } from "react";
import NavBar from "../NavBar.jsx";
import OrderSideBar from "../OrderSideBar.jsx";
import OrderList from "../OrderList.jsx";
import OrderService from "../OrderService.js";
import AuthService from "../auth.service";

const AdminOrderPage = (props) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("");

  const getOrders = () => {
    const fetchData = async () => {
      const data = await OrderService.getOrders();
      console.log(data);

      setOrders(data);
    };
    fetchData();
  };

  useEffect(() => {
    getOrders();
  }, []);

  const deleteOrder = (order) => {
    OrderService.removeOrder(order);
    getOrders();
  };

  const refreshSelected = (order) => {
    setSelectedOrder(order);
  };

  const logout = () => {
    AuthService.logout();
    props.history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <NavBar logout={logout}></NavBar>
      <div>
        <OrderList
          orders={orders}
          setSelectedOrder={setSelectedOrder}
        ></OrderList>
        <OrderSideBar
          selectedOrder={selectedOrder}
          refreshSelected={refreshSelected}
          deleteOrder={deleteOrder}
        ></OrderSideBar>
      </div>
    </div>
  );
};

export default AdminOrderPage;
