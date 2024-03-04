import { createSlice } from "@reduxjs/toolkit";

const storageDeletingPreferences = localStorage.getItem('deletionPreferences') || '{"list": true, "note": true}'

const initialState = {
    deletingPreferences: JSON.parse(storageDeletingPreferences),
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {

    }
})


export default preferencesSlice.reducer