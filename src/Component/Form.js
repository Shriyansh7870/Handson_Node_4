import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://login-z4zi.onrender.com/api/register", data)
      .then((res) => console.log(res.data));
    window.alert("Registration successful!");
    setData({
      name: "",
      email: "",
      password: "",
      phoneNo: "",
    });
  };

  return (
    <>
      <div className="center1">
        <h1 id="heading">Register</h1>
        <label id="font" htmlFor="name">
          Name:
        </label>
        <input
          className="text2"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        ></input>{" "}
        <br />
        <br />
        <label id="font" htmlFor="email">
          Email:{" "}
        </label>
        <input
          className="text2"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
        />
        <br />
        <br />
        <label id="font" htmlFor="Password">
          Set Password:{" "}
        </label>
        <input
          className="text3"
          type="password"
          maxLength="8"
          name="password"
          id="Password"
          onChange={handleChange}
          value={data.password}
        ></input>
        <br />
        <br />
        <label id="font" htmlFor="phoneNo">
          Phone.No:{" "}
        </label>
        <input
          className="text4"
          type="number"
          max="10"
          name="phoneNo"
          id="phoneNo"
          onChange={handleChange}
          value={data.phoneNo}
        ></input>{" "}
        <br />
        <br />
        <button className="button1" onClick={handleSubmit}>
          Submit
        </button>
        <div className="or1">OR</div>
        <NavLink to="/" className="nextpage1">
          Go To Login Page
        </NavLink>
      </div>
    </>
  );
}

export default Register;
