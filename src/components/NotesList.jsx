import { useEffect, useState } from "react";
import { handleInputSearch } from "../helpers/inputHelpers";
import { handleDeleteNote } from "../helpers/noteHelpers";

export default function NotesList({ notes, setNotes, searchVal, setCurrentId, setIsUpdateNotePage, setIsListPage }) {

    return (
        <ul className="note-list-container">
            {notes.filter(note => (handleInputSearch(note, searchVal))).map((note) => (
                <li className="list " key={note.id}>
                    <div className="list-header">
                        <div className="list-tittle">
                            <h4> {note.tittle} </h4>
                            {note.list ? <h5> {note.list} </h5> : null}
                        </div>
                        <div className="list-buttons">
                            <button onClick={() => {
                                setCurrentId(note.id)
                                setIsListPage(true)
                            }} ><i class="fa-regular fa-square-plus"></i></button>
                            <button onClick={() => {
                                setCurrentId(note.id)
                                setIsUpdateNotePage(true)
                            }
                            }><i class="fa-solid fa-pen-to-square"></i></button>
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