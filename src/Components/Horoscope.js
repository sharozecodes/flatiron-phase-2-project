import React from "react";

const Horoscope = ({ sign, horoscope }) => {
  return (
    <div>
      <h2>{sign.name} Horoscope</h2>
      <p>{horoscope}</p>
    </div>
  );
};

export default Horoscope;
