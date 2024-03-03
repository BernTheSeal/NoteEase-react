import { createSlice } from "@reduxjs/toolkit";
import { getTime, getDay } from "../../utils/TimeUtils";
import { v4 as uuidv4 } from 'uuid';

const storageData = localStorage.getItem("note") || '[]'

const initialState = {
    value: JSON.parse(storageData),
    id: null,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setId: (state, action) => {
            const id = action.payload
            state.id = id
        },
        addNote: (state, action) => {
            const { title, description } = action.payload
            const newNote = {
                id: uuidv4(),
                title: title,
                description: description,
                time: getTime(),
                day: getDay(),
                color: null,
                list: null
            }
            state.value = [newNote, ...state.value]
        },
        deleteNote: (state, action) => {
            const id = action.payload
            state.value = state.value.filter((note) => note.id !== id)
        },
        editNote: (state, action) => {
            const { newTitle, newDescription } = action.payload
            state.value = state.value.map((note) => {
                if (note.id === state.id) {
                    return {
                        ...note,
                        title: newTitle,
                        description: newDescription
                    }
                }
                return note
            })
        },
        addNoteToList: (state, action) => {
            const { title, color } = action.payload
            state.value = state.value.map((note) => {
                if (note.id === state.id) {
                    return {
                        ...note,
                        list: title,
                        color: color
                    }
                }
                return note
            })
        },
        removeNoteFromList: (state) => {
            state.value = state.value.map((note) => {
                if (note.id === state.id) {
                    return {
                        ...note,
                        list: null
                    }
                }
                return note
            })
        },
        removeAllNoteFromList: (state, action) => {
            const { listTitle } = action.payload
            state.value = state.value.map((note) => {
                if (note.list === listTitle) {
                    return {
                        ...note,
                        list: null
                    }
                }
                return note
            })
        }

    }
})


export const { addNote, deleteNote, setId, editNote, addNoteToList, removeNoteFromList, removeAllNoteFromList } = noteSlice.actions
export default noteSlice.reducer