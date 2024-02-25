import { useEffect, useState, useContext } from "react"
import { handleInputLimit } from "../helpers/inputHelpers"
import { Toaster } from 'react-hot-toast';
import { DataContext } from "../context/DataContext";

export default function UpdateNotePage({ setIsUpdateNotePage, currentId }) {
  const [currentNote, setCurrentNote] = useState('')
  const [newTittle, setNewTittle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const { state, dispatch } = useContext(DataContext)

  useEffect(() => {
    const curNote = state.notes.find(note => note.id === String(currentId))
    setCurrentNote(curNote)
  }, [currentId])

  useEffect(() => {
    setNewTittle(currentNote.tittle)
    setNewDescription(currentNote.description)
  }, [currentNote])

  return (
    <div className="pages-container">
      <Toaster />
      <form action="">
        <div className="form-header">
          <h3> Edit Note</h3>
          <button onClick={() => setIsAddNotePage(false)}><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div className="form-main">
          <input type="text" placeholder="tittle" value={newTittle} onChange={(e) => handleInputLimit(80, e, 'TITTLE', newTittle, setNewTittle)} />
          <textarea placeholder="description" value={newDescription} onChange={(e) => {
            handleInputLimit(750, e, 'DESCRIPTION', newDescription, setNewDescription)
          }}></textarea>
        </div>
        <div className="form-footer">
          <button className="grn-btn" onClick={(e) => {
            e.preventDefault()
            dispatch({ type: 'EDIT_NOTE', payload: { 'editId': currentId, 'newTittle': newTittle, 'newDescription': newDescription } })
          }}>Edit</button>
          <button onClick={() => setIsUpdateNotePage(false)}>Cancel</button>
        </div>

      </form>
    </div>
  )
}


