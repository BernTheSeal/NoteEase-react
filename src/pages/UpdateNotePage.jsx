import { handleUpdateNote } from "../helpers/noteHelpers"
import { useEffect, useState } from "react"
import { handleInputLimit } from "../helpers/inputHelpers"

export default function UpdateNotePage({ notes, setNotes, setIsUpdateNotePage, currentId }) {
  const [currentNote, setCurrentNote] = useState('')
  const [newTittle, setNewTittle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const inputFields = [
    {
      type: 'text',
      placeholder: 'new tittle',
      limit: 50,
      key: 'TITTLE',
      state: newTittle,
      setState: setNewTittle
    },
    {
      type: 'text',
      placeholder: 'new description',
      limit: 600,
      key: 'DESCRIPTION',
      state: newDescription,
      setState: setNewDescription
    }
  ]

  useEffect(() => {
    const curNote = notes.find(note => note.id === String(currentId))
    setCurrentNote(curNote)
  }, [currentId])

  useEffect(() => {
    setNewTittle(currentNote.tittle)
    setNewDescription(currentNote.description)
  }, [currentNote])

  return (
    <div>
      <form action="">
        {inputFields.map((i) => (
          <input type={i.type} placeholder={i.placeholder} value={i.state} onChange={(e) => {
            handleInputLimit(i.limit, e, i.key, i.state, i.setState)
          }} />
        ))}
        <button onClick={() => handleUpdateNote(currentId, newTittle, newDescription, notes, setNotes)}>save</button>
        <button onClick={() => setIsUpdateNotePage(false)}>x</button>
      </form>
    </div>
  )
}


