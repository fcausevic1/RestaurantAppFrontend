import React from "react";
import "./User.css";

const User = (props) => {
  var userId;
  return (
    <ul>
      <li className="numberBorder">{props.id}</li>
      <li className="border">{props.name}</li>
      <li className="border">{props.lastName}</li>
      <li className="emailBorder">{props.email}</li>
      <li className="border">{props.address}</li>
      <li className="border">{props.username}</li>
      <li className="border">{props.password}</li>
      <li className="numberBorder">{props.role}</li>
      <span
        className="close"
        onClick={() => {
          userId = props.id;
          props.mediatorRemoveUserFromList.removeUserFromList(props);
        }}
      >
        x
      </span>
    </ul>
  );
};

export default User;
