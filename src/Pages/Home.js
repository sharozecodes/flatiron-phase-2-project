import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getZodiacSign from "../Components/getZodiacSign";

const Home = () => {
  const [zodiac, setZodiac] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <h2>Welcome to Zodiac Horoscope Explorer</h2>
      <button onClick={() => navigate("/Aquarius")}>Submit</button>
    </>
  );
};

export default Home;
