import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import FormComponent from "../Components/FormComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const Home = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();
  return (
    <div id="home-div">
      <img
        className="img-fluid rounded-circle"
        src="https://facts.net/wp-content/uploads/2022/01/Zodiac-signs-inside-of-horoscope-circle.jpg"
        alt="Zodiac Signs"
      />
      <h1 className="text-white center-align">
        Welcome to Zodiac Horoscope Explorer
      </h1>
      <FormComponent
        name={name}
        dateOfBirth={dateOfBirth}
        setName={setName}
        setDateOfBirth={setDateOfBirth}
      />
      <Button variant="light" onClick={() => navigate("/userlist")}>
        Users
      </Button>
    </div>
  );
};

export default Home;
