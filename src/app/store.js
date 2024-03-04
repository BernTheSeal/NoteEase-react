import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../features/note/noteSlice'
import listReducer from '../features/list/listSlice'
import modalReducer from '../features/modal/modalSlice'
import preferencesReducer from '../features/preferences/preferencesSlice'

export const store = configureStore({
    reducer: {
        note: noteReducer,
        list: listReducer,
        modal: modalReducer,
        preferences: preferencesReducer
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('note', JSON.stringify(state.note.value))
    localStorage.setItem('list', JSON.stringify(state.list.value))
    localStorage.setItem('deletionPreferences', JSON.stringify(state.preferences.deletingPreferences))
});