import { deleteNote, setId } from "../features/note/noteSlice";
import { handleInputSearch } from "../helpers/inputHelpers";
import { useDispatch, useSelector } from "react-redux";

export default function Notes({ searchVal, setIsUpdateNotePage, setIsListPage, filterListTittle }) {
    const state = useSelector((state) => state.note.value)
    const dispatch = useDispatch()

    const handleDeleteNote = (id) => {
        dispatch(deleteNote(id))
    }

    const handleEditNote = (id) => {
        dispatch(setId(id))
        setIsUpdateNotePage(true)
    }

    return (
        <ul className="note-list-container">
            {state
                .filter(note => (handleInputSearch(note, searchVal, 'NOTE')))
                .filter(note => filterListTittle === 'All Notes' ? note : note.list === filterListTittle)
                .map((note) => {
                    return (
                        <li className="notes " key={note.id}>
                            <div className="notes-header">
                                <div className="notes-tittle">
                                    <h4> {note.title} </h4>
                                    {note.list ? <h5 style={{ border: `1px solid ${note.color}`, color: `${note.color}` }}> {note.list} </h5> : null}
                                </div>
                                <div className="notes-buttons">
                                    <button
                                        name='list page'
                                        onClick={() => {
                                            setIsListPage(true)
                                            dispatch(setId(note.id))
                                        }} >
                                        <i className="fa-solid fa-bars"></i>
                                    </button>

                                    <button
                                        name='edit page'
                                        onClick={() => {
                                            handleEditNote(note.id)
                                        }}>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                    <button
                                        name='delete note'
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleDeleteNote(note.id)
                                        }}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="notes-main">
                                <p>{note.description}</p>
                            </div>
                            <div className="notes-footer">
                                <p style={{ marginRight: '15px' }}>{note.time}</p>
                                <p>{note.day}</p>
                            </div>
                        </li>
                    )
                })}
        </ul >
    )
}