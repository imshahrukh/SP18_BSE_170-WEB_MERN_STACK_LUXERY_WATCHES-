/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { validateName } from "./validation";
import { checkAddItemFeilds } from "./checkFeilds";
import { getData, readOnlyData, updateData } from "./call";

const UpdateItem = ({ id, showUpdateItem, setShowUpdateItem }) => {
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
  var [data, setData] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    // setFormSubmitted(true);
    console.log(tags);
    const watch = {
      price: price,
      totalItems: item,
      status: status,
      discription: discription,
      tags: tags,
    };
    const d = await updateData(`http://localhost:8000/v1/watch/${id}`, watch);
    //
    console.log(d);
    setMessage("Item Updated");
  };

  const getData = async () => {
    const t = await readOnlyData(`http://localhost:8000/v1/watch/single/${id}`);
    setPrice(t.data.watch.price);
    setItem(t.data.watch.totalItems);
    setDiscription(t.data.watch.discription);
    setTags(t.data.watch.tags);
    setStatus(t.data.watch.status);
    setData(t.data.watch);
    console.log(data);

    // setDiscription(data.discription);
    // setStatus(data.status);
    // setTags(data.tags);
  };
  useEffect(() => {
    getData();
  }, []);
  // eslint-disable-next-line no-undef
  console.log("Product _ID :: ", id);
  return (
    <div class="login-page">
      <div class="form_1">
        <div
          onClick={() => {
            if (showUpdateItem === 1) {
              setShowUpdateItem(0);
            } else {
              setShowUpdateItem(1);
            }
          }}
          class="close"
        >
          X
        </div>

        <div class="login">
          <div class="login-header">
            <h3>Update Product</h3>
            <p>Please enter Info to Update Prdocut.</p>
          </div>
        </div>
        <form class="login-form">
          {/* name */}
          <input
            disabled
            value={data.name}
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
            value={price}
            style={{
              borderColor: price !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            placeholder="Enter Price"
          />
          {/* total Item */}
          <input
            value={item}
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
            value={status}
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
            disabled
            value={data.weight}
            style={{
              border: weight !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setWeight(event.target.value)}
            type="number"
            placeholder="Enter Weight"
          />
          {/*  Discritpion*/}
          <input
            value={discription}
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
            value={tags}
            style={{
              borderColor: tags === "" ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setTags(event.target.value)}
            type="text"
            placeholder="Add Tags"
          />
          {/*  model*/}
          <input
            disabled
            value={data.model}
            style={{
              borderColor: model !== "" ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setModel(event.target.value)}
            type="text"
            placeholder="Enter Model"
          />
          {/*  caseMaterial*/}
          <input
            disabled
            value={data.case_material}
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
            disabled
            value={data.case_size}
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
            disabled
            value={data.case_thickness}
            style={{
              borderColor:
                caseThickness !== 0 ? "solid 1px #707070" : "1px solid red",
            }}
            onChange={(event) => setCaseThickness(event.target.value)}
            type="number"
            placeholder="Case Thinkness"
          />
          {/* Brands */}
          <select
            value={data.brand}
            disabled
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
          <button onClick={(e) => submitForm(e)}>Update Item</button>
          <p class="message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
