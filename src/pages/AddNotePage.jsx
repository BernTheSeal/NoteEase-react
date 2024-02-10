import { useState } from "react";
import { handleAddNote } from "../helpers/noteHelpers";
import { handleInputLimit } from "../helpers/inputHelpers";
import Button from "../components/Button";

export default function AddNotePage({ notes, setNotes, setIsAddNotePage }) {
    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')

    const inputFields = [
        {
            type: 'text',
            placeholder: 'tittle',
            limit: 50,
            key: 'TITTLE',
            state: tittle,
            setState: setTittle
        },
        {
            type: 'text',
            placeholder: 'description',
            limit: 600,
            key: 'DESCRIPTION',
            state: description,
            setState: setDescription
        }
    ]

    return (
        <div className="add-note-page-container">
            <form>
                {inputFields.map((i) => (
                    <div>
                        <input type={i.type} placeholder={i.placeholder} value={i.state}
                            onChange={(e) => { handleInputLimit(i.limit, e, i.key, i.state, i.setState) }}
                        />
                    </div>
                ))
                }
                <Button onClick={() => handleAddNote(tittle, description, setNotes, setTittle, setDescription, notes)}> add </Button>
                <button onClick={() => setIsAddNotePage(false)}>X</button>
            </form>
        </div>
    )
}