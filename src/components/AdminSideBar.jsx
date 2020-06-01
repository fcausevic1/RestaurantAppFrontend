import React from "react";
import "./AdminSideBar.css";

const SideBar = (props) => {
  const { orderedProducts } = props;

  var name;
  var price;

  var editedName = "";
  var editedPrice = "";

  return (
    <div className="sideBar">
      <h1 className="addLabel">Add product</h1>
      <form>
        <label htmlFor="pname" className="margin">
          Product name:{" "}
        </label>
        <input type="text" name="pname" id="pname" className="margin" />
        <br></br>
        <label htmlFor="pprice" className="margin">
          {" "}
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
        <label htmlFor="pname" className="margin">
          Product name:{" "}
        </label>
        <input
          type="text"
          name="pname"
          id="pname"
          className="margin"
          defaultValue={props.selectedProduct.name}
          onChange={(event) => {
            editedName = event.target.value;
          }}
        />
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
          defaultValue={props.selectedProduct.price}
          onChange={(event) => {
            editedPrice = event.target.value;
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
            className="confirmBtn margin"
            onClick={(event) => {
              event.preventDefault();
              props.selectedProduct({ editedName, editedPrice });
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
