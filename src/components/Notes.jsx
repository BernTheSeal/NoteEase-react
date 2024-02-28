import { handleInputSearch } from "../helpers/inputHelpers";
import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export default function Notes({ searchVal, setCurrentId, setIsUpdateNotePage, setIsListPage, filterListTittle, setIsModal, setModalProperties }) {
    const { state, dispatch } = useContext(DataContext)
    return (
        <ul className="note-list-container">
            {state.notes
                .filter(note => (handleInputSearch(note, searchVal, 'NOTE')))
                .filter(note => filterListTittle === 'All Notes' ? note : note.list === filterListTittle)
                .map((note) => {
                    return (
                        <li className="notes " key={note.id}>
                            <div className="notes-header">
                                <div className="notes-tittle">
                                    <h4> {note.tittle} </h4>
                                    {note.list ? <h5 style={{ border: `1px solid ${note.color}`, color: `${note.color}` }}> {note.list} </h5> : null}
                                </div>
                                <div className="notes-buttons">
                                    <button onClick={() => {
                                        setCurrentId(note.id)
                                        setIsListPage(true)
                                    }} ><i className="fa-solid fa-bars"></i></button>
                                    <button onClick={() => {
                                        setCurrentId(note.id)
                                        setIsUpdateNotePage(true)
                                    }
                                    }><i className="fa-solid fa-pen"></i></button>
                                    <button onClick={() => {
                                        setCurrentId(note.id)
                                        if (state.settings.note) {
                                            setIsModal(true)
                                            setModalProperties({
                                                dispatch: {
                                                    type: 'DELETE_NOTE',
                                                    payload: { 'deleteId': note.id }
                                                },
                                                text: 'note',
                                                noteTittle: note.tittle

                                            })
                                        } else {
                                            dispatch({ type: 'DELETE_NOTE', payload: { 'deleteId': note.id } })
                                        }
                                    }}><i className="fa-solid fa-trash"></i></button>
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
        </ul>
    )
}