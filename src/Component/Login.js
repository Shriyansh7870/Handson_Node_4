import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function LogIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://login-z4zi.onrender.com/api/login", data)
      .then((res) => {
        console.log(res.data.msg);
        window.alert("Login successful!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="center">
      <h1 id="heading">Log in</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <label className="word" htmlFor="email">
          Email:
        </label>
        <input
          className="text"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
        />
        <br />
        <br />
        <label className="word" htmlFor="password">
          Password:
        </label>
        <input
          className="text1"
          type="password"
          maxLength="8"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.password}
        />
        <br />
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <div className="or">OR</div>

      <NavLink to="/Register" className="nextpage">
        please Register First
      </NavLink>
    </div>
  );
}

export default LogIn;
