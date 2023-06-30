import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Button from "react-bootstrap/Button";
import "../App.css";
const Home = () => {
  const [zodiac, setZodiac] = useState("Apple");
  const navigate = useNavigate();
  return (
    <>
      <h2>Welcome to Zodiac Horoscope Explorer</h2>
      <button onClick={() => navigate(`/${zodiac}`)}>Horoscope</button>
      <button onClick={() => navigate("/userlist")}>USERLIST</button>
      {/* <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button> */}
    </>
  );
};

export default Home;
