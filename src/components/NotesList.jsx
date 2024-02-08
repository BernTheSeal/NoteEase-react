import { useEffect, useState } from "react";
import Note from "./Note";
import { handleInputSearch } from "../helpers/inputHelpers";
import { handleDeleteNote } from "../helpers/noteHelpers";
import { useNavigate } from "react-router-dom";

export default function NotesList({ notes, setNotes, searchVal }) {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.setItem("allNotes", JSON.stringify(notes));
    }, [notes])

    return (
        <ul className="note-list-container">
            {notes.filter(note => (handleInputSearch(note, searchVal))).map((note) => (
                <li className="list " key={note.id}>
                    <div className="list-header">
                        <div className="list-tittle">
                            <h4> {note.tittle} </h4>
                            <h5> list name </h5>
                        </div>
                        <div className="list-buttons">
                            <button><i class="fa-regular fa-square-plus"></i></button>
                            <button onClick={() => navigate(`edit-note/${note.id}`)}><i class="fa-solid fa-pen-to-square"></i></button>
                            <button onClick={() => {
                                handleDeleteNote(notes, note.id, setNotes)
                            }}><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <div className="list-main">
                        <p>{note.description}</p>
                    </div>
                    <div className="list-footer">
                        <p>{note.time}</p>
                        <p>{note.day}</p>
                    </div>
                </li>
            ))}
        </ul>



    )
}