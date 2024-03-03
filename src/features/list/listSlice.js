import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const storageData = localStorage.getItem("list") || '[]'

const initialState = {
    value: JSON.parse(storageData),
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addList: (state, action) => {
            const { title, color, listArray } = action.payload
            if (title !== '' && color !== null && !listArray.includes(title)) {
                const newList = {
                    id: uuidv4(),
                    title: title,
                    color: color
                }
                state.value = [newList, ...state.value]
            }
        },
        deleteList: (state, action) => {
            const { id } = action.payload
            state.value = state.value.filter((list) => list.id !== id)
        }
    }
})

export const { addList, deleteList } = listSlice.actions
export default listSlice.reducer