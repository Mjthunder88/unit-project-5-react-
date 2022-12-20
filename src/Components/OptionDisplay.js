import React from "react";

import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
  const currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials, "logged in option display");

  return (
    <div className="stack">
      {currentPotentials.map((country) => {
        return (
          <h2 key={country.name.official} className="country-option">
            {country.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
