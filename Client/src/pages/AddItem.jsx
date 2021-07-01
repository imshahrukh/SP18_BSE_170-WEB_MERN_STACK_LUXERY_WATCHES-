/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { validateName } from "./validation";
import { checkAddItemFeilds } from "./checkFeilds";
import { getData, readOnlyData } from "./call";

const LoginForm = ({ showAddItem, setShowAddItem }) => {
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState(0);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [weight, setWeight] = useState(0);
  const [discription, setDiscription] = useState("");
  const [model, setModel] = useState("");
  const [caseMaterial, setCaseMaterial] = useState("");
  const [caseSize, setCaseSize] = useState(0);
  const [caseThickness, setCaseThickness] = useState(0);
  const [tags, setTags] = useState("");
  const [__id, set_Id] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const check = checkAddItemFeilds(
      price,
      item,
      name,
      brand,
      status,
      weight,
      discription,
      model,
      caseMaterial,
      caseSize,
      caseThickness,
      tags
    );

    if (check === true) {
      // setFormSubmitted(true);
      const watch = {
        name: name,
        price: price,
        totalItems: item,
        totalSale: 12,
        brand: brand,
        status: status,
        weight: weight,
        discription: discription,
        review: "",
        tags: tags.split(" "),
        model: model,
        case_material: caseMaterial,
        case_size: caseSize,
        case_thickness: caseThickness,
        images: [
          "popular1.png",
          "popular2.png",
          "popular3.png",
          "popular4.png",
          "single1.jpg",
          "gallery2.jpg",
          "pexels-photo-125779.jpeg",
        ],
      };
      console.log(watch);
      const data = await getData("http://localhost:8000/v1/watch", watch);
      set_Id(data.data.watch._id);
      setShowAddItem(0);
    }
  };
  useEffect(async () => {
    if (localStorage.getItem("id") !== null) {
      const item = {
        product_id: __id,
      };

      await getData(
        `http://localhost:8000/v1/store/${localStorage.getItem("id")}`,
        item
      );
      setMessage("Data Added To Database");
    }
  }, [__id]);
  // eslint-disable-next-line no-undef

  return (
    <div class="login-page">
      <div class="form_1">
        <div
          onClick={() => {
            if (showAddItem === 1) {
              setShowAddItem(0);
            } else {
              setShowAddItem(1);
            }
          }}
          class="close"
        >
          X
        </div>

        <div class="login">
          <div class="login-header">
            <h3>Add Product</h3>
            <p>Please enter Info to Create Prdocut.</p>
          </div>
        </div>
        <form class="login-form">
          {/* name */}
          <input
            style={{
              border:
                name === ""
                  ? ""
                  : validateName(name) === true
                  ? "solid 1px #707070"
                  : "1px solid red",
            }}
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            placeholder="Enter Product Name"
          />
          {/* Price */}
          <input
            style={{
              borderColor: price !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            placeholder="Enter Price"
          />
          {/* total Item */}
          <input
            style={{
              border: item !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setItem(event.target.value)}
            type="number"
            placeholder="Enter Item"
          />
          {/* status */}
          <select
            name="Status"
            option={status}
            id="city"
            style={{
              fontSize: "16px",
              width: "100%",
              backgroundColor: "#fff",
              height: "50px",
              marginBottom: "15px",
            }}
            defaultValue={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="status">Select Status</option>
            <option value="active">Active</option>
            <option value="diactive">Diactive</option>
          </select>
          {/* weight */}
          <input
            style={{
              border: weight !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setWeight(event.target.value)}
            type="number"
            placeholder="Enter Weight"
          />
          {/*  Discritpion*/}
          <input
            style={{
              borderColor:
                discription === "" ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setDiscription(event.target.value)}
            type="text"
            placeholder="Product Information"
          />
          {/* date */}
          {/*  tags*/}
          <input
            style={{
              borderColor: tags === "" ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setTags(event.target.value)}
            type="text"
            placeholder="Add Tags"
          />
          {/*  model*/}
          <input
            style={{
              borderColor: model !== "" ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setModel(event.target.value)}
            type="text"
            placeholder="Enter Model"
          />
          {/*  caseMaterial*/}
          <input
            style={{
              borderColor:
                caseMaterial === "" ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setCaseMaterial(event.target.value)}
            type="text"
            placeholder="Case Material"
          />
          {/*  case_size*/}
          <input
            style={{
              borderColor:
                caseSize !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setCaseSize(event.target.value)}
            type="number"
            placeholder="Case Size"
          />
          {/*  case_thickness*/}
          <input
            style={{
              borderColor:
                caseThickness !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setCaseThickness(event.target.value)}
            type="number"
            placeholder="Case Thinkness"
          />
          ={/* Brands */}
          <select
            name="Brand"
            option={brand}
            id="city"
            style={{
              fontSize: "16px",
              width: "100%",
              backgroundColor: "#fff",
              height: "50px",
              marginBottom: "15px",
            }}
            defaultValue={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            <option value="brand">Enter Brand</option>
            <option value="brand1">brand1</option>
            <option value="brand2">brand2</option>
            <option value="brand3">brand3</option>
          </select>
          <button onClick={(e) => submitForm(e)}>Create Item</button>
          <p class="message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
