import { useNavigate } from "react-router-dom";
import React from "react";
export default function Home() {
  const navi = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navi("/");
  };

  return (
    <div>
      <h2>Welcome to Home page</h2>
      <button onClick={handleClick}>LOGOUT</button>
    </div>
  );
}
