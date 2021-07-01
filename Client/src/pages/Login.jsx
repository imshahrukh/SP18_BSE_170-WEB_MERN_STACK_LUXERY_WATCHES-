import React, { useEffect } from "react";
import { useState } from "react";
import { validateEmail, validatePassword } from "./validation";
import { getData } from "./call";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const d = {
      email: email,
      password: password,
    };
    const data = await getData("http://localhost:8000/v1/login", d);

    if (data.total === 1) {
      setMessage("Success");
      localStorage.setItem("id", data.data.member[0]._id);
      localStorage.setItem("login", data.token);
      console.log(data);
      navigate("/adminHome");
    } else {
      setMessage("Fail To Loging......");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/adminHome");
    }
  });
  return (
    <div class="login-page">
      <div class="form_1">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
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
          <button onClick={(e) => submitForm(e)}>login</button>
          <p class="message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
