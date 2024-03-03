import { useEffect, useState } from 'react'
import List from './List'
import { useSelector } from 'react-redux'


export default function Lists({ setFilterListTitle }) {

    const [listLengths, setListLengths] = useState({})
    const stateList = useSelector((state) => state.list.value)
    const stateNote = useSelector((state) => state.note.value)

    useEffect(() => {
        const lengths = {}
        stateList.forEach(list => {
            const noteCount = stateNote.filter(note => note.list === list.title).length
            lengths[list.title] = noteCount
        })
        setListLengths(lengths)
    }, [stateList, stateNote])

    return (
        <>
            {
                stateList.map((list, index) => (
                    <List list={list} index={index} length={listLengths} setFilterListTitle={setFilterListTitle} />
                ))
            }
        </>
    )
}

