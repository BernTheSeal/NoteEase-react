export function handleInputLimit(limit, e, type, state, setState) {
    switch (type) {
        case 'TITTLE':
            if (state.length < limit) {
                setState(e.target.value)
            } else {
                setState(e.target.value.substring(0, limit))
            }
            break;
        case 'DESCRIPTION':
            if (state.length < limit) {
                setState(e.target.value)
            } else {
                setState(e.target.value.substring(0, limit))
            }
            break;
    }
}

export function handleInputSearch(note, searchValue) {
    const search = searchValue.toLocaleLowerCase().replace(/\s+/g, '').trim()
    return (
        note.tittle.toLowerCase().replace(/\s+/g, '').includes(search) ||
        note.description.toLowerCase().replace(/\s+/g, '').includes(search)
    )
}