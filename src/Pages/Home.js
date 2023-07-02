import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import FormComponent from "../Components/FormComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const Home = () => {
  const [zodiac, setZodiac] = useState("Taurus");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <h2>Welcome to Zodiac Horoscope Explorer</h2>
      <FormComponent
        name={name}
        dateOfBirth={dateOfBirth}
        setName={setName}
        setDateOfBirth={setDateOfBirth}
      />
      <Button onClick={() => navigate("/userlist")}>Users</Button>
    </>
  );
};

export default Home;
