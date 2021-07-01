import React, { useState, useEffect } from "react";
import { readOnlyData, deleteItem } from "./../call";
import CartTile from "./CartTile";
function Cart(props) {
  var [cartData, setCartData] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8000/v1/cart/1";

    const data = await readOnlyData(url);
    // setSize(data.size);
    const ids = data.data.cart[0].item;
    // console.log(ids[0].product_id);

    const test = ids.map(async function (el) {
      const t = await readOnlyData(
        `http://localhost:8000/v1/watch/single/${el.product_id}`
      );
      return t.data.watch;
      // (cartData.push());
      // console.log(cartData[0]);
      // console.log(typeof cartData);
    });
    setCartData(await Promise.all(test));
    console.log(test[0]);

    // alert(size);
  };
  const del = async (id) => {
    const test = await deleteItem(`http://localhost:8000/v1/cart/1`, {
      product_id: id,
    });
    fetchData();
    console.log("ca;;ed");
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="shopping-cart">
      {/* <div className="circle"></div> */}
      {/* <!-- Title --> */}
      <div class="title">
        Shopping Bag
        <div class="price">Total : 395$</div>
      </div>

      {cartData.length === 0
        ? ""
        : cartData.map((el, key) => (
            <CartTile del={del} key={key} item={key} data={el} />
          ))}

      <div
        style={{
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#2869ff",
          textAlign: "center",
          color: "white",
        }}
      >
        Create Order
      </div>

      {/* <!-- Product #1 --> */}

      {/* <!-- Product #2 --> */}

      {/* <!-- Product #1 --> */}

      {/* <!-- Product #3 --> */}
    </div>
  );
}

export default Cart;
