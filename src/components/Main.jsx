import { useState } from "react"
import NoteList from "./NotesList";
import AddNote from "./AddNote";

export default function Main() {

    const storageData = localStorage.getItem("allNotes") || '[]';
    const [notes, setNotes] = useState(JSON.parse(storageData))
    const [addPanel, setAddPanel] = useState(false)
    console.log(notes)
    return (
        <div className="container">
            <button onClick={()=>setAddPanel(true)}> add some note</button>
            {addPanel ? <AddNote notes={notes} setNotes={setNotes} setAddPanel={setAddPanel}/> : null }
            <NoteList notes={notes} setNotes={setNotes}/>
        </div>
    )
}



