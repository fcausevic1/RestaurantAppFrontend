import React from "react";
import "./AdminSideBar.css";

const SideBar = (props) => {
  const { orderedProducts } = props;

  return (
    <div className="sideBar">
      <button className="addBtn">Add product</button>
      <form>
        <br></br>
        <label for="pname" className="margin">
          Product name:{" "}
        </label>
        <input type="text" name="pname" className="margin" />
        <br></br>
        <label for="pprice" className="margin">
          {" "}
          <br></br>
          Product price:{" "}
        </label>
        <br></br>
        <input type="text" name="pprice" className="margin" />
        <br></br>
        <div className="margin">
          <button className="cancelBtn margin">Cancel</button>
          <button className="confirmBtn margin">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
