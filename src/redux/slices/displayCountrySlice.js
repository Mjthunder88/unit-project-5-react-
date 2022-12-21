import { createSlice } from "@reduxjs/toolkit";

import initialCountry from '../../assets/initialCountry'




export const displayCountrySlice = createSlice({
    name: "displayCountry",
    initialState: {
        value: initialCountry
    },
    reducers: {                         //* redux/toolkit will take any reducers you have in your slice create them into actions. That can be used globally. 
        setDisplayCountry(state, action) {
            state.value = action.payload
        },
        deleteDisplayCountry(state) {
            state.value = null
        }
    }
})

export const { setDisplayCountry, deleteDisplayCountry } = displayCountrySlice.actions

export const selectDisplay = (state) => {   //? This function is what tells/ defines what to do with actions that come in. Or how they will be returned back to the subscriber funciton. 
    return state.displayedCountry.value
}

export default displayCountrySlice.reducer