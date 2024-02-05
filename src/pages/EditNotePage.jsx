import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { handleEditNote } from "../helpers/noteHelpers"

export default function EditNotePage({notes , setNotes}){
  const {id} = useParams()
  const stringId = String(id)
  const [currentNote, setCurrentNote] = useState('')
  const [newTittle , setNewTittle] = useState('')
  const [newDescription , setNewDescription] = useState('')

  useEffect(()=> {
    const myNote = notes.find(note => note.id === stringId)
    setCurrentNote(myNote)
  },[{id}])

  useEffect(()=> {
    setNewTittle(currentNote.tittle)
    setNewDescription(currentNote.description)
  },[currentNote])

  return (
    <div>
      <form action="">
        <input type="text" placeholder='new tittle' value={newTittle} onChange={(e)=> setNewTittle(e.target.value)} />
        <input type="text" placeholder="new description" value={newDescription}  onChange={(e)=> setNewDescription(e.target.value)} />
        <button onClick={(e)=> {
          e.preventDefault()
          handleEditNote(id, newTittle, newDescription , notes, setNotes)
        }} >
          edit
        </button>
      </form>
    </div>
  )
}


