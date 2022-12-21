import React from "react";

import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="symbols">
      <div className="stack">
        <h3>Flag of{currentDisplay.name.common}:</h3>
        {currentDisplay.flags && <img src={currentDisplay.flags.png} alt="country_flag" />}
      </div>
      <div className="stack">
        <h3>Coat of arms of {currentDisplay.name.common}:</h3>
        {currentDisplay.coatOfArms && <img src={currentDisplay.coatOfArms.png} alt="country_coat_of_arms" />}
        </div>
    </div>
  );
};

export default Symbols;
