import { useEffect, useState } from "react";
import Note from "./Note";
import { handleInputSearch } from "../helpers/inputHelpers";
import { handleDeleteNote } from "../helpers/noteHelpers";
import { useNavigate } from "react-router-dom";

export default function NotesList({notes, setNotes}){
    const [searchVal, setSearchVal] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
        localStorage.setItem("allNotes", JSON.stringify(notes));
    }, [notes])

    return (
            <div>
                <input type="search" placeholder='search' value={searchVal} onChange={(e)=> setSearchVal(e.target.value)} />
                {notes.filter(note => (handleInputSearch(note, searchVal))).map((note)=> (
                    <div className="note" key={note.id}>
                        <button onClick={()=> {
                            handleDeleteNote(notes , note.id, setNotes)
                        }}>Delete</button>
                        <button onClick={()=> navigate(`edit-note/${note.id}`)}>
                            edit
                        </button>
                        <Note 
                            id={note.id} 
                            tittle={note.tittle} 
                            description={note.description} 
                            time={note.time} 
                            day={note.day}
                        /> 
                    </div>
                ))}
            </div>

        
        
    )
}