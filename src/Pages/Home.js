import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import FormComponent from "../Components/FormComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col } from "react-bootstrap";
const Home = () => {
  const [zodiac, setZodiac] = useState("Taurus");
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
      <h2 className="text-white center-align">
        Welcome to Zodiac Horoscope Explorer
      </h2>
      <FormComponent
        name={name}
        dateOfBirth={dateOfBirth}
        setName={setName}
        setDateOfBirth={setDateOfBirth}
      />
      <Button
        className="button-class"
        variant="dark"
        className="center"
        onClick={() => navigate("/userlist")}
      >
        Users
      </Button>
    </div>

    ///---------Seond Attempt
    // <div className="d-flex align-items-center justify-content-center vh-100">
    //   <div className="text-center">
    //     <h2 className="text-white mb-4">
    //       Welcome to Zodiac Horoscope Explorer
    //     </h2>
    // <FormComponent
    //   name={name}
    //   dateOfBirth={dateOfBirth}
    //   setName={setName}
    //   setDateOfBirth={setDateOfBirth}
    // />
    //     <Button variant="primary" onClick={() => navigate("/userlist")}>
    //       Users
    //     </Button>
    //   </div>
    // </div>
    //// third attempt
    // <div className="d-flex align-items-center justify-content-center vh-100">
    //   <div className="text-center">
    //     <h2 className="text-white mb-4">
    //       Welcome to Zodiac Horoscope Explorer
    //     </h2>
    //     <FormComponent
    //       name={name}
    //       dateOfBirth={dateOfBirth}
    //       setName={setName}
    //       setDateOfBirth={setDateOfBirth}
    //     />

    //     <Row className="justify-content-center">
    //       <Col>
    //         <Button
    //           variant="secondary"
    //           onClick={() => navigate("/userlist")}
    //           block
    //         >
    //           Users
    //         </Button>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
  );
};

export default Home;
