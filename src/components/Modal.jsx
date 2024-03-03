import { useState } from "react"
import { deleteNote } from "../features/note/noteSlice"
import { useDispatch } from "react-redux"

export default function Modal({ setIsModal, modalProperties }) {

    const [isDontAskChecked, setIsDontAskChecked] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteNote(id))
        if (isDontAskChecked) {

        }
    }

    return (
        <div className="modal-container">
            <form >
                <div className="modal-header">
                    <p>Are you sure you wanna delete this {modalProperties.text}?</p>
                </div>
                <div className="modal-main">
                    <p>
                        {modalProperties.text === 'list' ?
                            `there are    ${modalProperties.value} items in the ${modalProperties.name} list. If you delete the list, these three items will remain but list will be deleted.`
                            : null}
                    </p>
                    <p>{modalProperties.text === 'note' ? `${modalProperties.title}` : null}</p>
                </div>
                <div className="modal-footer">
                    <div className="modal-label">
                        <input
                            type="checkbox"
                            checked={isDontAskChecked}
                            onChange={(e) => setIsDontAskChecked(e.target.checked)}
                        />
                        <label>
                            don't ask me again when I delete a {modalProperties.text}.
                        </label>
                    </div>
                    <div className="modal-buttons">
                        <button className="dlt-btn" onClick={(e) => {
                            e.preventDefault()
                            handleDelete(modalProperties.id)
                        }}>
                            Delete
                        </button>
                        <button onClick={() => setIsModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


