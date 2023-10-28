import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:4000/api/", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error", err));
      console.log("navigate");
      navigate("/Home");
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}
export default Home;
