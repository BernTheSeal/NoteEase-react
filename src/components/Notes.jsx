import { handleInputSearch } from "../helpers/inputHelpers";
// import { handleDeleteNote } from "../helpers/noteHelpers";
import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export default function Notes({ searchVal, setCurrentId, setIsUpdateNotePage, setIsListPage }) {
    const { state, dispatch } = useContext(DataContext)

    return (
        <ul className="note-list-container">
            {state.notes.filter(note => (handleInputSearch(note, searchVal, 'NOTE'))).map((note) => {
                return (
                    <li className="list " key={note.id}>
                        <div className="list-header">
                            <div className="list-tittle">
                                <h4> {note.tittle} </h4>
                                {note.list ? <h5 style={{ border: `1px solid ${note.color}`, color: `${note.color}` }}> {note.list} </h5> : null}
                            </div>
                            <div className="list-buttons">
                                <button onClick={() => {
                                    setCurrentId(note.id)
                                    setIsListPage(true)
                                }} ><i class="fa-solid fa-bars"></i></button>
                                <button onClick={() => {
                                    setCurrentId(note.id)
                                    setIsUpdateNotePage(true)
                                }
                                }><i class="fa-solid fa-pen"></i></button>
                                <button onClick={() => {
                                    dispatch({ type: 'DELETE_NOTE', payload: { 'deleteId': note.id } })
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
                )

            })}
        </ul>
    )
}