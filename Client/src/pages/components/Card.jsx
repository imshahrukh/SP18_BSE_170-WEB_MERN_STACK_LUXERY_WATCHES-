import React from "react";
import { getData, readOnlyData } from "./../call";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Membercard = ({ item, number }) => {
  let { name, price, discription, images, _id } = item;
  const [id, setId] = useState("");
  let navigate = useNavigate();

  // get all the cart with id 1

  const fetchData = async () => {
    const url = "http://localhost:8000/v1/cart";

    const data = await readOnlyData(url);
    const watch = data.data.cart[0].item;
    const check = watch.filter((el) => el.product_id === _id);

    if (check.length > 0) {
      alert("Item already in cart");
      return false;
    } else {
      const data = await getData(url, {
        visitor_id: "1",
        item: {
          product_id: _id,
        },
      });
      console.log(data);

      return true;
    }
  };
  return (
    <div class="watch-content">
      <div
        onClick={() => {
          fetchData();
          // add the item to store
          // update the local storage
        }}
        className="addtoCart"
      >
        Save Me
      </div>
      <img src={`assests/img/${images[number]}`} alt="" />
      <h3>{name}</h3>
      <p>{discription}</p>
      <h6>${price}</h6>
      <ul>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-star" aria-hidden="false"></i>
        </li>
      </ul>
      <button
        onClick={() => {
          localStorage.setItem("product", _id);
          console.log(localStorage.getItem("product"));
          navigate("/singleproduct");
        }}
        class="buy-3"
      >
        View Item
      </button>
    </div>
  );
};

export default Membercard;
