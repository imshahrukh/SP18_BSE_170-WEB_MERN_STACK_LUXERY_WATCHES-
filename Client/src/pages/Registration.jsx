import React, { useEffect } from "react";
import { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhoneNumber,
} from "./validation";

import { checkRegistrationFeilds } from "./checkFeilds";
import { getData, getData_GET } from "./call";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [store, setStore] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("Islamabd");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [exist, setExist] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    const check = checkRegistrationFeilds(
      email,
      password,
      firstName,
      lastName,
      store,
      date,
      phoneNumber,
      gender,
      city,
      address
    );
    if (check === true) {
      // create an object
      const member = {
        first_name: firstName,
        last_name: lastName,
        password: password,
        email: email,
        phone_number: phoneNumber,
        dbo: date,
        gender: gender,
        city: city,
        address: address,
      };
      const data = await getData("http://localhost:8000/v1/member", member);
      console.log("data : : ", data.data.member._id);
      setId(data.data.member._id);

      // create Store
      //
    } else {
      setMessage("Faild");
    }
  };

  // add store
  // useEffect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (id !== "") {
      const new_store = {
        member_id: id,
        store_name: store,
        store_products: [],
        rating: 0,
      };

      const add_store = await getData(
        "http://localhost:8000/v1/store",
        new_store
      );
      console.log(add_store);

      setMessage("Data Added To Database");
    }
  }, [id]);

  // useEffect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await getData_GET("http://localhost:8000/v1/store", {
      name: store,
    });
    if (data.store === 0) {
      setExist(false);
    } else {
      setExist(true);
    }
  }, [store]);

  return (
    <div class="login-page">
      <div class="form_1">
        <div class="login">
          <div class="login-header">
            <h3>Registration</h3>
            <p>Please enter your credentials For Registration.</p>
          </div>
        </div>
        <form class="login-form">
          {/* email */}
          <input
            style={{
              border:
                email === ""
                  ? ""
                  : validateEmail(email) === true
                  ? "solid 1px #707070"
                  : "1px solid red",
            }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            placeholder="Email"
          />
          {/* password */}
          <input
            style={{
              border:
                password === ""
                  ? ""
                  : validatePassword(password) === true
                  ? "solid 1px #707070"
                  : "1px solid red",
            }}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="password"
          />
          {/* First Name */}
          <input
            style={{
              border:
                firstName === ""
                  ? ""
                  : validateName(firstName) === true
                  ? "solid 1px #707070"
                  : "1px solid red",
            }}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="First Name"
          />
          {/* last Name */}
          <input
            style={{
              border:
                lastName === ""
                  ? ""
                  : validateName(lastName) === true
                  ? "solid 1px #707070"
                  : "1px solid red",
            }}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Last Name"
          />
          {/* phone number Name */}
          <input
            style={{
              border:
                phoneNumber === ""
                  ? ""
                  : validatePhoneNumber(phoneNumber) === true
                  ? "solid 1px #707070"
                  : "1px solid red",
            }}
            onChange={(event) => setPhoneNumber(event.target.value)}
            type="text"
            placeholder="Phone Number"
          />
          {/* store Name */}
          <input
            onChange={(event) => setStore(event.target.value)}
            type="text"
            placeholder="Store Name"
            style={{
              border: exist === false ? "solid 1px #707070" : "1px solid red",
            }}
          />

          {/* date */}
          <input
            onChange={(event) => setDate(event.target.value)}
            type="date"
          />

          {/* city */}
          <select
            name="Islamabad"
            option={city}
            id="city"
            style={{
              fontSize: "16px",
              width: "100%",
              backgroundColor: "#fff",
              height: "50px",
              marginBottom: "15px",
            }}
            defaultValue={city}
            onChange={(event) => setCity(event.target.value)}
          >
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Rawalpindi">Rawalpindi</option>
          </select>

          {/* Address Name */}
          <input
            style={{
              border: address === "" ? "1px solid red" : "solid 1px #707070",
            }}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            placeholder="Address"
          />

          {/* Gender */}
          <select
            name="Gender"
            option={gender}
            id="gender"
            style={{
              fontSize: "16px",
              width: "100%",
              height: "50px",
              marginBottom: "15px",
              backgroundColor: "#fff",
            }}
            defaultValue={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <button onClick={(e) => submitForm(e)}>Create Account</button>
          <p class="message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
