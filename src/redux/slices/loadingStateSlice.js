import { createSlice } from "@reduxjs/toolkit";


const loadingStateSlice = createSlice({
    name: "loadingStatus",
    initialState: {value: false},
    reducers: {
        changeToLoadingStatus(state) {
             state.value = true
        },
        notLoading(state) {
             state.value = false
        }
    }
})

export const {changeToLoadingStatus, notLoading} = loadingStateSlice.actions

export const currentStatus = (state) => {
    return state.loadingStatus.value
}

export default loadingStateSlice.reducer


