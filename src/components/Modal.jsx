import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

export default function Modal({ setIsModal, modalProperties }) {
    const { dispatch } = useContext(DataContext)
    const [isDontAskChecked, setIsDontAskChecked] = useState(false)

    const handleDelete = () => {
        dispatch(modalProperties.dispatch)
        if (isDontAskChecked) {
            dispatch({ type: 'EDIT_SETTINGS', payload: { 'what': modalProperties.text } })
        }
        setIsModal(false)
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
                    <p>{modalProperties.text === 'note' ? `${modalProperties.noteTittle}` : null}</p>
                </div>
                <div className="modal-footer">
                    <div className="modal-label">
                        <input
                            type="checkbox"
                            checked={isDontAskChecked}
                            onChange={(e) => setIsDontAskChecked(e.target.checked)}
                        />
                        <label htmlFor="">
                            don't ask me again when I delete a {modalProperties.text}.
                        </label>
                    </div>
                    <div className="modal-buttons">
                        <button className="dlt-btn" onClick={handleDelete} >
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


