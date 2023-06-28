import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Welcome to Zodiac Horoscope Explorer</h2>
      <button onClick={() => navigate("/Aquarius")}>Submit</button>
    </>
  );
};

export default Home;
