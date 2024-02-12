import { v4 as uuidv4 } from 'uuid';
import { getTime, getDay } from "../utils/TimeUtils";
import toast from 'react-hot-toast';

export function handleAddNote(tittle, description, setNotes, setTittle, setDescription, notes) {
    if (tittle !== '' && description !== '') {
        setNotes([{ id: uuidv4(), tittle: tittle.trim(), description: description.trim(), list: null, time: getTime(), day: getDay() }, ...notes])
        setTittle('')
        setDescription('')
        toast.success('Successfully added!', {
            duration: 1500,
            style: {
                background: 'rgb(85, 85, 85)',
                color: 'white'
            }
        });
    } else {
        toast.error('Failed to Add Note!', {
            duration: 1500,
            style: {
                background: 'rgb(85, 85, 85)',
                color: 'white'
            }
        });
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
    toast.success('Successfully edited!', {
        duration: 1500,
        style: {
            background: 'rgb(85, 85, 85)',
            color: 'white'
        }
    });
}


