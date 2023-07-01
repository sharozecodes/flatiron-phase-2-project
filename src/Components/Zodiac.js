import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Zodiac = () => {
  const navigate = useNavigate();
  const { zodiacSign } = useParams();
  const [zodiacSigns, setZodiacSigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/zodiacs")
      .then((response) => response.json())
      .then((data) => {
        setZodiacSigns(data);
      });
  }, []);

  const favoriteFood = zodiacSigns.find(
    (zodiac) => zodiac.name === zodiacSign
  )?.favoriteFood;
  const image = zodiacSigns.find((zodiac) => zodiac.name === zodiacSign)?.image;
  const traits = zodiacSigns.find(
    (zodiac) => zodiac.name === zodiacSign
  )?.description;

  return (
    <div>
      <img id="zodiac-images" src={image} alt={zodiacSign} width="300" />
      <h1>Your Zodiac is {zodiacSign}</h1>
      <h2>and we know you like {favoriteFood}</h2>
      <p>{traits}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default Zodiac;
