import axios from "axios";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";


import { changeToLoadingStatus, notLoading } from "../redux/slices/loadingStateSlice";



const Weather = () => {
  const [weather, setWeather] = useState();

  const display = useSelector(selectDisplay);

  const dispatch = useDispatch()

  const latitude = display.capitalInfo.latlng[0];

  const longitude = display.capitalInfo.latlng[1];

  useEffect(() => {
    dispatch(changeToLoadingStatus())
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": "2decd6aae9msh63164680c58316fp1eada4jsn8b6c1dbcb636",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeather(response.data)
        dispatch(notLoading())
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [latitude, longitude]);            //! Why do we have to put the "?" in  the jsx? 
                                        //* those are conditionals for checking information
                                        //* it well check if its truthy or falsy /defined and then it will move to the next section 
                                        //* This helps prevent the code from breaking because it will check first if there is a value there. 
                                        //? ex: content ? ... : .... etc 

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather?.current.temp_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather?.current.feelslike_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather?.current?.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>{weather?.current?.wind_mph}</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
