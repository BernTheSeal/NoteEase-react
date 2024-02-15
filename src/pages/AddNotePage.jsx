import { useState } from "react";
import { handleInputLimit } from "../helpers/inputHelpers";
import { Toaster } from 'react-hot-toast';
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export default function AddNotePage({ setIsAddNotePage }) {
    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')

    const { dispatch } = useContext(DataContext)

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
                        dispatch({ type: 'ADD_NOTE', payload: { 'tittle': tittle, 'description': description } })
                        setTittle('')
                        setDescription('')
                    }}> Add </button>
                    <button onClick={() => setIsAddNotePage(false)}> Cancel</button>
                </div>
            </form>
        </div>
    )
}