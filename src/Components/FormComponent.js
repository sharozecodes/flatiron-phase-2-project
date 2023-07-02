import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";

const FormComponent = ({ name, dateOfBirth, setName, setDateOfBirth }) => {
  const navigate = useNavigate();
  const [zodiacSigns, setZodiacSigns] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/zodiacs")
      .then((response) => response.json())
      .then((data) => {
        setZodiacSigns(data);
      });
  }, []);

  const getZodiacSign = (date) => {
    const birthDate = new Date(date);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    let zodiacSign = null;

    zodiacSigns.forEach((sign) => {
      const startMonth = sign.startDate.month;
      const startDay = sign.startDate.day;
      const endMonth = sign.endDate.month;
      const endDay = sign.endDate.day;

      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay)
      ) {
        zodiacSign = sign.name;
      }
    });

    return zodiacSign;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const saveUser = (userName, userDateOfBirth, sign) => {
    const postData = {
      name: userName,
      dateOfBirth: userDateOfBirth,
      zodiac: sign,
    };

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const zodiac = getZodiacSign(dateOfBirth);

    navigate(`/${zodiac}`);
    saveUser(name, dateOfBirth, zodiac);
    setName("");
    setDateOfBirth("");
  };

  return (
    <div id="form">
      <h2 className="text-white">User Information</h2>
      <form className="text-white" onSubmit={handleSubmit}>
        <div className="form-element">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
        </div>
        <div className="form-element">
          <label>
            Date of Birth:
            <input
              type="date"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              required
            />
          </label>
        </div>
        <Button className="form-element" variant="light" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormComponent;
