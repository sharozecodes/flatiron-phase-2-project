import React from "react";

function ZodiacIdentifier({ dateOfBirth, setZodiac }) {
  const birthDate = new Date(dateOfBirth);
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
      zodiacSign = sign;
    }
  });

  return <p>{zodiacSign}</p>;
}

export default ZodiacIdentifier;
