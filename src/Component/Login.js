import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function LogIn() {
  const navi = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://login-ejkr.onrender.com/api/login", data)
      .then((res) => {
        alert(res.data.msg);
        setData({
          email: "",
          password: "",
        });
        localStorage.setItem("token", res.data.token);
        navi("/Home");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Login failed. Please check your credentials.");
      });
  };

  return (
    <div className="center">
      <h1 id="heading">Log in</h1>
      {error && <p className="error">{error}</p>}{" "}
      {/* Display error message if there is an error */}
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
          required
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
          required
        />
        <br />
        <br />
        <button className="button" type="submit">
          Submit
        </button>{" "}
      </form>
      <div className="or">OR</div>
      <NavLink to="/Register" className="nextpage">
        please Register First
      </NavLink>
    </div>
  );
}

export default LogIn;
