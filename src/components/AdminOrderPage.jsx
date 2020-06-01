import React, { useState } from "react";
import NavBar from "./NavBar.jsx";
import OrderSideBar from "./OrderSideBar.jsx";
import OrderList from "./OrderList.jsx";

const AdminOrderPage = (props) => {
  const tempOrders = [
    {
      id: "1111",
      date: "22.12.2020",
      completion: "false",
      user: "user1 useric1",
      coupon: "4%",
    },
    {
      id: "2222",
      date: "22.12.2020",
      completion: "false",
      user: "user2 useric2",
      coupon: "3%",
    },
    {
      id: "33333",
      date: "22.12.2020",
      completion: "false",
      user: "user3 useric3",
      coupon: "11%",
    },
    {
      id: "44444",
      date: "22.12.2020",
      completion: "false",
      user: "user4 useric4",
      coupon: "12%",
    },
  ];
  const [orders, setOrders] = useState(tempOrders);
  /*const [selectedOrder, setSelectedOrder] = useState("");*/

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <OrderList orders={orders}></OrderList>
        <OrderSideBar></OrderSideBar>
      </div>
    </div>
  );
};

export default AdminOrderPage;
