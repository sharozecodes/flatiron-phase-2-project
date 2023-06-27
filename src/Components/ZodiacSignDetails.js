import React from "react";

const ZodiacSignDetails = ({ zodiacSign }) => {
  return (
    <div>
      <h2>{zodiacSign.name}</h2>
      <p>Element: {zodiacSign.element}</p>
      <p>Ruling Planet: {zodiacSign.rulingPlanet}</p>
      <p>Personality Traits: {zodiacSign.traits}</p>
    </div>
  );
};

export default ZodiacSignDetails;
