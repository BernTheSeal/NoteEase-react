import { useState } from "react";
import { handleAddNote } from "../helpers/noteHelpers";
import { handleInputLimit } from "../helpers/inputHelpers";
import { Toaster } from 'react-hot-toast';

export default function AddNotePage({ notes, setNotes, setIsAddNotePage }) {
    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div className="pages-container">
            <Toaster />
            <form>
                <div className="form-header">
                    <h3> Add Note</h3>
                    <button onClick={() => setIsAddNotePage(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="form-main">
                    <input type="text" placeholder="tittle" value={tittle} onChange={(e) => handleInputLimit(80, e, 'TITTLE', tittle, setTittle)} />
                    <textarea placeholder="description" value={description} onChange={(e) => {
                        handleInputLimit(750, e, 'DESCRIPTION', description, setDescription)
                    }}></textarea>
                </div>
                <div className="form-footer">
                    <button className="grn-btn" onClick={(e) => {
                        e.preventDefault()
                        handleAddNote(tittle, description, setNotes, setTittle, setDescription, notes)
                        notify()
                    }}> Add </button>
                    <button onClick={() => setIsAddNotePage(false)}  > Cancel</button>
                </div>
            </form>
        </div>
    )
}