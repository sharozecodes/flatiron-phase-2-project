import React from "react";
import { useParams } from "react-router-dom";

const Horoscope = () => {
  const { zodiacSign } = useParams();

  return (
    <div>
      <h2>Horoscope</h2>
      <p>{zodiacSign}</p>
    </div>
  );
};

export default Horoscope;
