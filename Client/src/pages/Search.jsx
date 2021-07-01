/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Card from "./components/Card";
import { getData_GET } from "./call";
// import axios from "axios";
// import img from "assests/img/no.jpg";

const SearchPage = (props) => {
  const [search, setSearch] = useState(0);
  const [city, setCity] = useState("");
  const [searchItem, setSearchItem] = useState("");
  let [data, setData] = useState([]);

  // const getData = async (url, sub_Data) => {
  //   let res = await axios.post(url, sub_Data);
  //   return res.data;
  // };

  // // on submit
  // skills: [searchItem]
  let getSearchedData = async (event) => {
    event.preventDefault();
    const data = {
      // tags: [searchItem],
      brand: city,
      name: searchItem,
    };
    console.log(data);
    const url = "http://localhost:8000/v1/watch/search";
    const newData = await getData_GET(url, data);
    console.log(newData.data.watch);
    setData(newData.data.watch);
  };
  // // api call to get the search items
  const changeCity = (vl) => {
    setCity(vl);
  };
  const changeSearchItem = (data) => {
    setSearchItem(data);
  };

  return (
    <div className="search-body">
      <div
        className={`search-page ${
          search === 0 ? "remove_img" : "remove_img_height"
        }`}
        style={{
          background:
            search === 0 ? "url('assests/img/bg1.jpg') no-repeat center" : null,
        }}
      >
        <div
          className={`wrapper  ${
            search === 0 ? "remove-wrapper" : "remove-height"
          }`}
        >
          <input
            style={{
              fontSize: "16px",
            }}
            type="text"
            className="input "
            placeholder="What are you looking for?"
            onChange={(e) => changeSearchItem(e.target.value)}
          />
          <select
            className="input input1"
            name="cars"
            option={city}
            id="cars"
            style={{
              fontSize: "16px",
            }}
            defaultValue={city}
            onChange={(event) => changeCity(event.target.value)}
          >
            <option value=""></option>
            <option value="brand1">brand1</option>
            <option value="brand2">brand2</option>
            <option value="brand3">brand3</option>
            {/* <option value="Rawalpindi">Rawalpindi</option> */}
          </select>

          <button
            onClick={(event) => {
              getSearchedData(event);
              setSearch(1);
            }}
            className="searchbtn"
            style={{
              height: "60px",
              width: "60px",
            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="tests">
        <div class="gallery-watch">
          {data.length === 0 ? (
            <div
              style={{
                width: "100%",
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                style={{
                  width: "auto",
                  height: "100%",
                }}
                src={"assests/img/no.jpg"}
                alt="test"
              ></img>
            </div>
          ) : (
            data.map((item, index) => (
              <Card number={index} key={index} item={item} />
            ))
          )}
          {/* 
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
//function success(pos) {
//   var crd = pos.coords;
//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   return {
//     latitude: crd.latitude,
//     longitude: crd.longitude,
//   };
// }
// function getLocation() {
//   if (navigator.geolocation) {
//     return navigator.geolocation.getCurrentPosition(success);
//   }
// }

/* style={"justify-content: center; align-items: center;"} */
/* <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              backgroundColor: null,
            }}
          >
            <span style={{ color: "white" }}>Get My Location</span>
            <input
              onChange={(event) => isSlected(event.target.value)}
              type="checkbox"
              defaultChecked={checkBox}
            />
          </div> */
