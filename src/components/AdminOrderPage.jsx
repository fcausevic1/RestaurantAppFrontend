import React from "react";
import NavBar from "./NavBar.jsx";
import OrderSideBar from "./OrderSideBar.jsx";
import OrderList from "./OrderList.jsx";

const AdminOrderPage = (props) => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <table>
          <OrderList></OrderList>
        </table>
      </div>
      <div>
        <OrderSideBar></OrderSideBar>
      </div>
    </div>
  );
};

export default AdminOrderPage;
