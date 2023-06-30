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
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h2>{zodiacSign}</h2>
    </div>
  );
};

export default Horoscope;
