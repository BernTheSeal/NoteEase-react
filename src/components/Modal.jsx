import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteNote } from "../features/note/noteSlice";
import { setIsDeletingModal } from "../features/modal/modalSlice";
import { deleteList } from "../features/list/listslice";
import { setDeletingPreferences } from "../features/preferences/preferencesSlice";

export default function Modal() {
    const modalType = useSelector((state) => state.modal.isDeletingModal.modalType)

    switch (modalType) {
        case "DELETE-NOTE":
            return (
                <DeletingNoteModal />
            )
            break;
        case "DELETE-LIST":
            return (
                <DeletingListModal />
            )
            break;
        default:
            break;
    }
}

function DeletingNoteModal() {
    const dispatch = useDispatch()
    const noteState = useSelector((state) => state.note.value)
    const id = useSelector((state) => state.note.id)
    const [note, setNote] = useState(null)
    const [isDontAskChecked, setIsDontAskChecked] = useState(false)

    const handleDeleteNote = () => {
        dispatch(deleteNote(id))
        if (isDontAskChecked) {
            dispatch(setDeletingPreferences('note'))
        }
        dispatch(setIsDeletingModal(false))
    }

    useEffect(() => {
        const note = noteState.find((note) => note.id === id)
        setNote(note)
    }, [])

    return (
        <div className="modal-container">
            <form >
                <div className="modal-header">
                    Are you sure you wanna delete this note?
                </div>
                <div className="modal-main">
                    <p>
                        {note && note.title}
                    </p>
                </div>
                <div className="modal-footer">
                    <div className="modal-label">
                        <input
                            type="checkbox"
                            checked={isDontAskChecked}
                            onChange={(e) => setIsDontAskChecked(e.target.checked)}
                        />
                        <label>
                            don't ask me again when I delete a note.
                        </label>
                    </div>
                    <div className="modal-buttons">
                        <button className="dlt-btn" onClick={(e) => {
                            e.preventDefault()
                            handleDeleteNote()
                        }}>
                            Delete
                        </button>
                        <button onClick={() => {
                            dispatch(setIsDeletingModal(false))
                        }}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


function DeletingListModal() {
    const dispatch = useDispatch()
    const listState = useSelector((state) => state.list.value)
    const id = useSelector((state) => state.list.id)
    const [list, setList] = useState(null)
    const [isDontAskChecked, setIsDontAskChecked] = useState(false)

    const handleDeleteList = () => {
        dispatch(deleteList({ id }))
        if (isDontAskChecked) {
            dispatch(setDeletingPreferences('list'))
        }
        dispatch(setIsDeletingModal(false))
    }

    useEffect(() => {
        const list = listState.find((list) => list.id === id)
        setList(list)
    }, [])

    return (
        <div className="modal-container">
            <form >
                <div className="modal-header">
                    <p>are you sure you wanna delete this list?</p>
                </div>
                <div className="modal-main">
                    <p>
                        {list && list.title}
                    </p>
                </div>
                <div className="modal-footer">
                    <div className="modal-label">
                        <input
                            type="checkbox"
                            checked={isDontAskChecked}
                            onChange={(e) => setIsDontAskChecked(e.target.checked)}
                        />
                        <label>
                            don't ask me again when I delete a list.
                        </label>
                    </div>
                    <div className="modal-buttons">
                        <button className="dlt-btn" onClick={(e) => {
                            e.preventDefault()
                            handleDeleteList()
                        }}>
                            Delete
                        </button>
                        <button onClick={() => {
                            dispatch(setIsDeletingModal(false))
                        }}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

