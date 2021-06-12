/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Card from "./components/Card";
// import axios from "axios";
// import img from "./../img/no.jpg";

const SearchPage = (props) => {
  const [search, setSearch] = useState(0);
  const [city, setCity] = useState("");
  const [searchItem, setSearchItem] = useState("");
  // let [data, setData] = useState([]);

  // const getData = async (url, sub_Data) => {
  //   let res = await axios.post(url, sub_Data);
  //   return res.data;
  // };

  // // on submit
  // skills: [searchItem]
  let getSearchedData = async (event) => {
    event.preventDefault();
    const data = {
      skills: [searchItem],
      city: city,
    };
    // const url = "http://localhost:8000/v1/search";
    // const newData = await getData(url, data);
    // console.log(data);
    // setData(newData.data.provider);
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
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Rawalpindi">Rawalpindi</option>
          </select>

          <button
            onClick={(event) => {
              getSearchedData(event);
              setSearch(1);
            }}
            className="searchbtn"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="tests">
        <div className="member-cards hide-member-cards">
          {/* {data.length === 0 ? (
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
                src={img}
                alt="test"
              ></img>
            </div>
          ) : (
            data.map((item, index) => <MemberCard key={index} item={item} />)
          )} */}

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
