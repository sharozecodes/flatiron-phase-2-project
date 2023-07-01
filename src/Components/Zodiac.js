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
      <p style={{ fontSize: "21px" }}>{traits}</p>
      <h2>
        Food most commonly like by {zodiacSign}: {favoriteFood}
      </h2>

      <button onClick={() => navigate("/")}>Back</button>
      <button onClick={() => navigate(`/${zodiacSign}/horoscope`)}>
        Check Horoscope
      </button>
    </div>
  );
};

export default Zodiac;
