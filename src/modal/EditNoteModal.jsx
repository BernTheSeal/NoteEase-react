import { useEffect, useState } from "react"
import { handleInputLimit } from "../helpers/inputHelpers"
import { Toaster } from 'react-hot-toast';
import { editNote } from "../features/note/noteSlice";
import getToast from "../helpers/toastHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditNoteModal } from "../features/modal/modalSlice";

export default function EditNoteModal() {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const dispatch = useDispatch()
  const id = useSelector((state) => state.note.id)
  const notes = useSelector((state) => state.note.value)

  useEffect(() => {
    notes.map((note) => {
      if (note.id == id) {
        setNewTitle(note.title)
        setNewDescription(note.description)
      }
    })
  }, [])

  const handleEditNote = (e) => {
    e.preventDefault()
    dispatch(editNote({ newTitle, newDescription }))
    getToast('Note edited', true)
  }

  return (
    <div className="pages-container">
      <Toaster />
      <form action="">
        <div className="form-header">
          <h3> Edit Note</h3>
          <button onClick={() => dispatch(setIsEditNoteModal(false))}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="form-main">
          <input
            type="text"
            placeholder="title"
            value={newTitle}
            onChange={(e) => handleInputLimit(80, e, 'TITLE', newTitle, setNewTitle)}
          />
          <textarea
            placeholder="description"
            value={newDescription}
            onChange={(e) => {
              handleInputLimit(750, e, 'DESCRIPTION', newDescription, setNewDescription)
            }}>
          </textarea>
        </div>
        <div className="form-footer">
          <button className="grn-btn" onClick={(e) => handleEditNote(e)}>
            Edit
          </button>
        </div>
      </form >
    </div >
  )
}


