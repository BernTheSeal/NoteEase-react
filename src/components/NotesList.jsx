import { useState } from "react";
import Note from "./Note";
import { handleInputSearch } from "../helpers/inputHelpers";

export default function NotesList({notes, setNotes}){
    const [searchVal, setSearchVal] = useState('')

    return (
        <div>
            <input type="search" placeholder='search' value={searchVal} onChange={(e)=> setSearchVal(e.target.value)} />
            {notes.filter(note => (handleInputSearch(note, searchVal))).map((note)=> (
                <div className='noteList-container'>
                    <Note 
                        id={note.id} 
                        tittle={note.tittle} 
                        description={note.description} 
                        time={note.time} 
                        day={note.day}
                        notes ={notes}
                        setNotes = {setNotes}
                    /> 
                </div>))}
        </div>
    )
}