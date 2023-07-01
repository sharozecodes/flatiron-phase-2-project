import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../Components/UserList";
//import Button from "react-bootstrap/Button";
import "../App.css";
import FormComponent from "../Components/FormComponent";
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
      <button onClick={() => navigate("/userlist")}>Users</button>

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
