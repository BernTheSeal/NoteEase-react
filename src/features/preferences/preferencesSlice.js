import { createSlice } from "@reduxjs/toolkit";

const storageDeletingPreferences = localStorage.getItem('deletionPreferences') || '{"list": true, "note": true}'

const initialState = {
    deletingPreferences: JSON.parse(storageDeletingPreferences),
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        setDeletingPreferences: (state, action) => {
            const type = action.payload
            state.deletingPreferences = {
                ...state.deletingPreferences,
                [type]: false
            }
        }
    }
})

export const { setDeletingPreferences } = preferencesSlice.actions
export default preferencesSlice.reducer