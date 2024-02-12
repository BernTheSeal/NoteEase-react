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
        case 'LIST':
            if (state.length < limit) {
                setState(e.target.value)
            } else {
                setState(e.target.value.substring(0, limit))
            }
            break;
    }
}

export function handleInputSearch(element, searchValue, type) {
    const search = searchValue.toLocaleLowerCase().replace(/\s+/g, '').trim()
    switch (type) {
        case 'NOTE':
            return (
                element.tittle.toLowerCase().replace(/\s+/g, '').includes(search) ||
                element.description.toLowerCase().replace(/\s+/g, '').includes(search)
            )
            break;
        case 'LIST':
            return (
                element.tittle.toLowerCase().replace(/\s+/g, '').includes(search)
            )
            break;
        default:
            break;
    }
}