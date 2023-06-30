import React from "react";
import { Link } from "react-router-dom";

const ZodiacSignList = ({ zodiacSigns }) => {
  return (
    <div>
      <h2>Zodiac Signs</h2>
      <ul>
        {zodiacSigns.map((sign) => (
          <li key={sign.id}>
            <Link to={`/zodiac-signs/${sign.id}`}>{sign.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZodiacSignList;
