import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Horoscope() {
  const navigate = useNavigate();
  const { zodiacSign } = useParams();
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    fetch(
      `http://sandipbgt.com/theastrologer/api/horoscope/${zodiacSign.toLowerCase()}/today`
    )
      .then((response) => response.json())
      .then((data) => {
        setHoroscope(data.horoscope);
      });
  }, []);

  return (
    <div>
      <h2>{zodiacSign} Today</h2>
      <p>{horoscope}</p>
      <button onClick={() => navigate(`/${zodiacSign}`)}>Back</button>
    </div>
  );
}

export default Horoscope;
