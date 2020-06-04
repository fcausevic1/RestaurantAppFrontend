import React, { useState } from "react";
import "./AdminSideBar.css";

const SideBar = (props) => {
  var name;
  var price;

  var editedName = "";
  var editedPrice = "";

  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");

  function validateProduct() {
    return ProductName.length > 0 && ProductPrice.length > 0;
  }

  return (
    <div className="sideBar">
      <h1 className="addLabel">Add product</h1>
      <form>
        <label htmlFor="pname" className="margin">
          Product name:{" "}
        </label>
        <input
          type="text"
          name="pname"
          id="pname"
          className="margin"
          onChange={(e) => setProductName(e.target.value)}
        />
        <br></br>
        <label htmlFor="pprice" className="margin">
          {" "}
          Product price:{" "}
        </label>
        <br></br>
        <input
          type="text"
          name="pprice"
          id="pprice"
          className="margin"
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <br></br>
        <div className="margin">
          <button
            className="cancelBtn margin"
            onClick={(event) => event.preventDefault()}
          >
            Cancel
          </button>
          <button
            disabled={!validateProduct()}
            className="confirmBtn margin"
            onClick={(event) => {
              event.preventDefault();
              name = document.getElementById("pname").value;
              price = document.getElementById("pprice").value;
              props.addProduct(name, price);
            }}
          >
            Add
          </button>
        </div>
      </form>
      <br></br>
      <h1 className="addLabel">Edit product</h1>
      <form>
        <label htmlFor="peditname" className="margin">
          Product name:{" "}
        </label>
        <input
          // onChange={(e) => setProductName(e.target.value)}
          type="text"
          name="peditname"
          id="peditname"
          className="margin"
          defaultValue={props.selectedProduct.name}
          onChange={(event) => {
            editedName = event.target.value;
            setProductName(event.target.value);
          }}
        />
        <br></br>
        <label htmlFor="peditprice" className="margin">
          {" "}
          Product price:{" "}
        </label>
        <br></br>
        <input
          type="text"
          name="peditprice"
          id="peditprice"
          className="margin"
          defaultValue={props.selectedProduct.price}
          onChange={(event) => {
            editedPrice = event.target.value;
            setProductPrice(event.target.value);
          }}
        />
        <br></br>
        <div className="margin">
          <button
            className="cancelBtn margin"
            onClick={(event) => event.preventDefault()}
          >
            Cancel
          </button>
          <button
            //  disabled={!validateProduct()}
            className="confirmBtn margin"
            onClick={(event) => {
              event.preventDefault();
              editedName = document.getElementById("peditname").value;
              editedPrice = document.getElementById("peditprice").value;
              props.editProduct(props.selectedProduct, editedName, editedPrice);
            }}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
