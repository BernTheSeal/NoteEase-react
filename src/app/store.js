import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../features/note/noteSlice'
import listReducer from '../features/list/listslice'
import modalReducer from '../features/modal/modalSlice'

export const store = configureStore({
    reducer: {
        note: noteReducer,
        list: listReducer,
        modal: modalReducer,
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('note', JSON.stringify(state.note.value))
    localStorage.setItem('list', JSON.stringify(state.list.value))
});