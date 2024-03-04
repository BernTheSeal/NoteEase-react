import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAddNoteModal: false,
    isEditNoteModal: false,
    isAddListModal: false,
    isListPageModal: false,
    isDeletingModal: {
        isModal: false,
        modalType: null
    }
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsAddNoteModal: (state, action) => {
            state.isAddNoteModal = action.payload
        },
        setIsEditNoteModal: (state, action) => {
            state.isEditNoteModal = action.payload
        },
        setIsAddListModal: (state, action) => {
            state.isAddListModal = action.payload
        },
        setIsListModal: (state, action) => {
            state.isListPageModal = action.payload
        },
        setIsDeletingModal: (state, action) => {
            state.isDeletingModal.isModal = action.payload
        },
        setModalType: (state, action) => {
            state.isDeletingModal.modalType = action.payload
        }
    }
})

export const { setIsAddNoteModal, setIsEditNoteModal, setIsAddListModal, setIsListModal, setIsDeletingModal, setModalType } = modalSlice.actions
export default modalSlice.reducer