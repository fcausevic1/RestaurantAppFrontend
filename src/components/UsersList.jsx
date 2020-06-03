import React from "react";
import User from "./User.jsx";
import "./UserList.css";

const UserList = (props) => {
  const { users } = props;
  const mediatorRemoveUserFromList = props;

  return (
    <div className="tableContainer">
      <ul className="table">
        {users.map((user) => (
          <li key={user.id}>
            <User
              mediatorRemoveUserFromList={mediatorRemoveUserFromList}
              id={user.id}
              name={user.name}
              lastName={user.lastName}
              email={user.email}
              address={user.address}
              username={user.username}
              password={user.password}
              role={user.role}
            ></User>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
