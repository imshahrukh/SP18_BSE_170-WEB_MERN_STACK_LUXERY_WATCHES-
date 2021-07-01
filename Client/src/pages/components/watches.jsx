import React from "react";
import { deleteItemURL } from "./../call.js";
function Watches({
  setProduct,
  data,
  setShowUpdateItem,
  showUpdateItem,
  callFunction,
}) {
  //   console.log(name);
  const { name, brand, price, totalSale, totalItems, status, model, _id } =
    data;

  return (
    <div class="products-row">
      <button class="cell-more-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-more-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>
      <div class="product-cell image">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="product"
        />
        <span>{name}</span>
      </div>
      <div class="product-cell category">
        <span class="cell-label">brand:</span>
        {brand}
      </div>
      <div class="product-cell status-cell">
        <span class="cell-label">Status:</span>
        <span class="status active">{status}</span>
      </div>
      <div class="product-cell sales">
        <span class="cell-label">Sales:</span>
        {totalSale}
      </div>
      <div class="product-cell stock">
        <span class="cell-label">Stock:</span>
        {totalItems}
      </div>
      <div class="product-cell price">
        <span class="cell-label">Price:</span>${price}
      </div>
      <div class="product-cell price">
        <div
          style={{
            // backgroundColor: "blue",
            borderRadius: "12px",
            color: "black",
            padding: "10px",
            marginLeft: "10px",
          }}
          onClick={() => {
            if (showUpdateItem === 1) {
              setShowUpdateItem(0);
              setProduct("");
            } else {
              setShowUpdateItem(1);
              setProduct(_id);
            }
          }}
        >
          <i class="fas fa-edit"></i>
        </div>
        <div
          style={{
            // backgroundColor: "red",
            borderRadius: "12px",
            color: "black",
            padding: "10px",
            curser: "pointer",
          }}
          onClick={async (e) => {
            // e.preventDefault();
            await deleteItemURL(`http://localhost:8000/v1/watch/${_id}`);
            // console.log("data");

            callFunction();
          }}
        >
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}

export default Watches;
