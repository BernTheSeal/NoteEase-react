import { useState, useEffect } from "react";
import {handleAddNote} from "../helpers/noteHelpers";
import {handleInputLimit} from "../helpers/inputHelpers";

export default function AddNotePage({notes, setNotes ,setAddPanel}){
    const [tittle , setTittle] = useState('')
    const [description, setDescription] = useState('')

    const inputFields = [
        {
            type: 'text',
            placeholder: 'tittle',
            limit: 50,
            key: 'TITTLE',
            state : tittle,
            setState: setTittle
        },
        {
            type: 'text',
            placeholder: 'description',
            limit: 250,
            key: 'DESCRIPTION',
            state : description,
            setState: setDescription
        }
    ]

    useEffect(() => {
        localStorage.setItem("allNotes", JSON.stringify(notes));
      }, [notes]);
    
    function handleAddNoteClick(e) {
        e.preventDefault()
        handleAddNote(tittle, description, setNotes, setTittle, setDescription, notes)
    }

    return(
        <div>
            <form>
                <button onClick={()=>setAddPanel(false)}> x </button>
                {
                    inputFields.map((i)=> (
                        <input type={i.type} placeholder={i.placeholder} value={i.state} 
                            onChange={(e)=>{handleInputLimit(i.limit, e, i.key, i.state, i.setState)}}
                        />
                    ))
                }
                <button onClick={handleAddNoteClick}> add </button>
            </form>
        </div>
    )
}