import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Horoscope = () => {
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

  return (
    <div>
      <h2>{zodiacSign}</h2>
      <h1>{favoriteFood}</h1>
    </div>
  );
};

export default Horoscope;
