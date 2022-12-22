import { configureStore } from "@reduxjs/toolkit";

import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice"

import displayCountrySlice from "./slices/displayCountrySlice";

import loadingStateSlice from "./slices/loadingStateSlice";


 



export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayCountrySlice,
        loadingStatus: loadingStateSlice
    }
});