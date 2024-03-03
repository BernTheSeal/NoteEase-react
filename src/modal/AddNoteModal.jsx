import { useState } from "react";
import { handleInputLimit } from "../helpers/inputHelpers";
import { useDispatch } from "react-redux";
import { addNote } from "../features/note/noteSlice";
import { setIsAddNoteModal } from "../features/modal/modalSlice";


export default function AddNoteModal({ setIsAddNotePage }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const handleAddNote = (e) => {
        e.preventDefault()
        if (title !== '' && description !== '') {
            dispatch(addNote({ title, description }))
            dispatch(setIsAddNoteModal(false))
        }
    }

    return (
        <div className="pages-container">
            <form>
                <div className="form-header">
                    <h3> Add Note</h3>
                    <button onClick={() => setIsAddNotePage(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="form-main">
                    <input type="text" placeholder="title" value={title} onChange={(e) => handleInputLimit(50, e, 'TITLE', title, setTitle)} />
                    <textarea placeholder="description" value={description} onChange={(e) => {
                        handleInputLimit(1500, e, 'DESCRIPTION', description, setDescription)
                    }}></textarea>
                </div>
                <div className="form-footer">
                    <button className="grn-btn" onClick={(e) => handleAddNote(e)}>
                        Add
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        dispatch(setIsAddNoteModal(false))
                    }
                    }> Cancel</button>
                </div>
            </form >
        </div >
    )
}