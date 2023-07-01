import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = ({ name, dateOfBirth, setName, setDateOfBirth }) => {
  const navigate = useNavigate();
  const [zodiacSigns, setZodiacSigns] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/zodiacs")
      .then((response) => response.json())
      .then((data) => {
        setZodiacSigns(data);
        console.log(data);
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

  const saveUser = (userName, userDateOfBirth) => {
    const postData = {
      name: userName,
      dateOfBirth: userDateOfBirth,
    };

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POST request succeeded with response:", data);
        // Handle the response data
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
        // Handle the error
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any desired actions with the submitted data
    console.log("Name:", name);
    console.log("Date of Birth:", dateOfBirth);
    //Detect Sign based of the dob
    const zodiac = getZodiacSign(dateOfBirth);
    //redirect the user to a page with sign in url

    navigate(`/${zodiac}`);
    // Clear the form fields
    saveUser(name, dateOfBirth);
    setName("");
    setDateOfBirth("");
  };

  return (
    <div>
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
