import { deleteNote, setNoteId } from "../features/note/noteSlice";
import { handleInputSearch } from "../helpers/inputHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setIsDeletingModal, setIsEditNoteModal, setIsListModal, setModalType } from "../features/modal/modalSlice";


export default function Notes({ searchVal, filterListTittle }) {
    const state = useSelector((state) => state.note.value)
    const notePreferences = useSelector((state) => state.preferences.deletingPreferences.note)
    const dispatch = useDispatch()

    const handleDeleteNote = (id) => {
        if (notePreferences) {
            dispatch(setModalType('DELETE-NOTE'))
            dispatch(setIsDeletingModal(true))
            dispatch(setNoteId(id))
        } else {
            dispatch(deleteNote(id))
        }
    }

    const handleEditNote = (id) => {
        dispatch(setNoteId(id))
        dispatch(setIsEditNoteModal(true))
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
                                            dispatch(setIsListModal(true))
                                            dispatch(setNoteId(note.id))
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