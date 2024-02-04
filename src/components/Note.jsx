import { handleDeleteNote } from "../helpers/noteHelpers";
import { useEffect } from "react";

export default function Note(props) {

    useEffect(() => {
        localStorage.setItem("allNotes", JSON.stringify(props.notes));
      }, [props.notes]);
    
    return (
        <div className="note" key={props.id}>
            <button onClick={()=>{
                handleDeleteNote(props.notes , props.id, props.setNotes)
            }}>Delete</button>
            <p>{props.tittle}</p>
            <p>{props.description}</p>
            <p> {props.time}</p>
            <p> {props.day} </p>
        </div>
    )
}
