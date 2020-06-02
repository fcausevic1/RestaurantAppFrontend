import React, { useState } from "react";
import NavBar from "../NavBar.jsx";
import OrderSideBar from "../OrderSideBar.jsx";
import OrderList from "../OrderList.jsx";

const AdminOrderPage = (props) => {
  const tempOrders = [
    {
      id: "1111",
      date: "22.12.2020",
      completion: "false",
      user: "user1 useric1",
      coupon: "4%",
      orderItems: [
        { product: { name: "Kifla", price: "1", id: "1" }, quantity: 1 },
        { product: { name: "Cevap", price: "2", id: "2" }, quantity: 4 },
      ],
    },
    {
      id: "2222",
      date: "22.12.2020",
      completion: "false",
      user: "user2 useric2",
      coupon: "3%",
      orderItems: [
        { product: { name: "Pizza", price: "1", id: "1" }, quantity: 1 },
        { product: { name: "Cevap", price: "2", id: "2" }, quantity: 4 },
      ],
    },
    {
      id: "33333",
      date: "22.12.2020",
      completion: "false",
      user: "user3 useric3",
      coupon: "11%",
      orderItems: [
        { product: { name: "Kifla", price: "1", id: "1" }, quantity: 1 },
        { product: { name: "Hagra", price: "2", id: "2" }, quantity: 4 },
      ],
    },
    {
      id: "44444",
      date: "22.12.2020",
      completion: "false",
      user: "user4 useric4",
      coupon: "12%",
      orderItems: [
        { product: { name: "Pasteta", price: "1", id: "1" }, quantity: 1 },
        { product: { name: "Cevap", price: "2", id: "2" }, quantity: 4 },
      ],
    },
  ];
  const [orders] = useState(tempOrders);
  const [selectedOrder, setSelectedOrder] = useState("");

  const refreshSelected = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <OrderList
          orders={orders}
          setSelectedOrder={setSelectedOrder}
        ></OrderList>
        <OrderSideBar
          selectedOrder={selectedOrder}
          refreshSelected={refreshSelected}
        ></OrderSideBar>
      </div>
    </div>
  );
};

export default AdminOrderPage;
