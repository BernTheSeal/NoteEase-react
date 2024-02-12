import { v4 as uuidv4 } from 'uuid';

export function handleAddList(listTittle, setListTittle, list, setList, color, e) {
    if (listTittle !== '') {
        setList([{ id: uuidv4(), tittle: listTittle, value: 0, color: color }, ...list])
        setListTittle('')
    }
}

export function handleDeleteList(list, setList, id) {
    const updateList = list.filter(l => l.id !== id)
    setList(updateList)
}

export function handleAdditionList(id, listName, notes, setNotes, list, setList) {
    const updateNotes = notes.map((note) => {
        if (note.id === String(id)) {
            return {
                ...note,
                list: listName.trim()
            }
        }
        return note
    })
    const updateList = list.map((l) => {
        if (l.tittle === listName) {
            return {
                ...l,
                value: l.value + 1
            }
        }

        return l
    })
    setList(updateList)
    setNotes(updateNotes)
}
