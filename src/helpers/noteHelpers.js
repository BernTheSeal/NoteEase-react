import { v4 as uuidv4 } from 'uuid';
import { getTime, getDay } from "../utils/TimeUtils";

export function handleAddNote(tittle, description, setNotes, setTittle, setDescription, notes) {
    if (tittle !== '' && description !== '') {
        setNotes([{id: uuidv4(),  tittle: tittle.trim(), description: description.trim(), time:getTime(), day: getDay()}, ...notes])
        setTittle('')
        setDescription('')
    }
  }

export function handleDeleteNote(notes, id , setNotes) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes)
}

