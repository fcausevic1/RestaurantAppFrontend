import React, { useState } from "react";
import UsersList from "./UsersList.jsx";
import NavBar from "./NavBar.jsx";
import OrderSideBar from "./OrderSideBar.jsx";

const AdminUserPage = (props) => {
  const tempUsers = [
    {
      id: "2",
      name: "japa",
      lastName: "caluk",
      email: "j@c.com",
      adress: "sssss33",
      username: "jcaluk",
      password: "pass",
      role: "2",
    },
    {
      id: "3",
      name: "dejan",
      lastName: "popovic",
      email: "d@p.com",
      adress: "dddd22",
      username: "dpopovic",
      password: "pass",
      role: "1",
    },
    {
      id: "4",
      name: "mirza",
      lastName: "gojak",
      email: "m@g.com",
      adress: "cccccc44",
      username: "mgojak1",
      password: "pass",
      role: "4",
    },
    {
      id: "5",
      name: "japa",
      lastName: "caluk",
      email: "j@c.com",
      adress: "sssss33",
      username: "jcaluk",
      password: "pass",
      role: "2",
    },
    {
      id: "6",
      name: "dejan",
      lastName: "popovic",
      email: "d@p.com",
      adress: "dddd22",
      username: "dpopovic",
      password: "pass",
      role: "1",
    },
    {
      id: "7",
      name: "mirza",
      lastName: "gojak",
      email: "m@g.com",
      adress: "cccccc44",
      username: "mgojak1",
      password: "pass",
      role: "4",
    },
    {
      id: "8",
      name: "japa",
      lastName: "caluk",
      email: "j@c.com",
      adress: "sssss33",
      username: "jcaluk",
      password: "pass",
      role: "2",
    },
    {
      id: "9",
      name: "dejan",
      lastName: "popovic",
      email: "d@p.com",
      adress: "dddd22",
      username: "dpopovic",
      password: "pass",
      role: "1",
    },
    {
      id: "10",
      name: "mirza",
      lastName: "gojak",
      email: "m@g.com",
      adress: "cccccc44",
      username: "mgojak1",
      password: "pass",
      role: "4",
    },
    {
      id: "12",
      name: "japa",
      lastName: "caluk",
      email: "j@c.com",
      adress: "sssss33",
      username: "jcaluk",
      password: "pass",
      role: "2",
    },
    {
      id: "13",
      name: "dejan",
      lastName: "popovic",
      email: "d@p.com",
      adress: "dddd22",
      username: "dpopovic",
      password: "pass",
      role: "1",
    },
    {
      id: "11",
      name: "mirza",
      lastName: "gojak",
      email: "m@g.com",
      adress: "cccccc44",
      username: "mgojak1",
      password: "pass",
      role: "4",
    },
  ];
  const [users, setUsers] = useState(tempUsers);

  const removeUserFromList = (userId) => {
    const newUsers = users.filter((item) => {
      return item.id !== userId;
    });
    setUsers(newUsers.concat());
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="lista">
        <UsersList
          users={users}
          removeUserFromList={removeUserFromList}
        ></UsersList>
      </div>
      <OrderSideBar></OrderSideBar>
    </div>
  );
};
export default AdminUserPage;
