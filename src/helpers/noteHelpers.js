import { v4 as uuidv4 } from 'uuid';
import { getTime, getDay } from "../utils/TimeUtils";

export function handleAddNote(tittle, description, setNotes, setTittle, setDescription, notes) {
    if (tittle !== '' && description !== '') {
        setNotes([{ id: uuidv4(), tittle: tittle.trim(), description: description.trim(), list: null, time: getTime(), day: getDay() }, ...notes])
        setTittle('')
        setDescription('')
    }
}

export function handleDeleteNote(notes, id, setNotes) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes)
}

export function handleUpdateNote(id, newTittle, newDescription, notes, setNotes) {
    const updateNotes = notes.map((note) => {
        if (note.id === id) {
            return {
                ...note,
                tittle: newTittle.trim(),
                description: newDescription.trim()
            }
        }
        return note
    })
    setNotes(updateNotes)
}


