import React from "react";
import "./AdminSideBar.css";

const SideBar = (props) => {
  const { orderedProducts } = props;

  var name = "";
  var price = "";

  return (
    <div className="sideBar">
      <button className="addBtn">Add product</button>
      <form>
        <br></br>
        <label htmlFor="pname" className="margin">
          Product name:{" "}
        </label>
        <input type="text" name="pname" id="pname" className="margin" />
        <br></br>
        <label htmlFor="pprice" className="margin">
          {" "}
          <br></br>
          Product price:{" "}
        </label>
        <br></br>
        <input type="text" name="pprice" id="pprice" className="margin" />
        <br></br>
        <div className="margin">
          <button className="cancelBtn margin">Cancel</button>
          <button
            className="confirmBtn margin"
            onClick={(event) => {
              event.preventDefault();
              name = document.getElementById("pname").value;
              price = document.getElementById("pprice").value;
              console.log(name, price);
              props.addProduct(name, price);
            }}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
