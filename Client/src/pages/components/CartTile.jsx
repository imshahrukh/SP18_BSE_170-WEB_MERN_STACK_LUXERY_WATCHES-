import React from "react";

function CartTile({ data, item, del }) {
  const { price, discription, images, _id } = data;

  return (
    <div class="item">
      <div class="buttons">
        <span
          onClick={() => {
            del(_id);
          }}
          class="delete-btn"
        >
          X
        </span>
        <span class="like-btn"></span>
      </div>

      <div class="image">
        <img
          style={{
            width: "70px",
            height: "70px",
          }}
          src={`assests/img/${images[0]}`}
          alt=""
        />
      </div>

      <div class="description">
        <span>{discription.substring(0, 7)}</span>
      </div>

      <div class="total-price">${price}</div>
    </div>
  );
}

export default CartTile;
