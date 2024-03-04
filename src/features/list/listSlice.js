import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const storageData = localStorage.getItem("list") || '[]'

const initialState = {
    value: JSON.parse(storageData),
    id: null
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setListId: (state, action) => {
            const { id } = action.payload
            state.id = id
        },
        addList: (state, action) => {
            const { title, color } = action.payload
            const newList = {
                id: uuidv4(),
                title: title,
                color: color
            }
            state.value = [newList, ...state.value]
        },
        deleteList: (state, action) => {
            const { id } = action.payload
            state.value = state.value.filter((list) => list.id !== id)
        }
    }
})

export const { addList, deleteList, setListId } = listSlice.actions
export default listSlice.reducer