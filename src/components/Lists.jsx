import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'

export default function Lists({ setFilterListTittle }) {
    const { state, dispatch } = useContext(DataContext)
    const [listLengths, setListLengths] = useState({})
    console.log(listLengths)

    useEffect(() => {
        const lengths = {}
        state.list.forEach(list => {
            const noteCount = state.notes.filter(note => note.list === list.tittle).length
            lengths[list.tittle] = noteCount
        })
        setListLengths(lengths)
    }, [state.list, state.notes])

    return (
        <>
            {
                state.list.map((list, index) => (
                    <div key={index} className="group" onClick={() => { setFilterListTittle(list.tittle) }}>

                        <button onClick={() => {
                            dispatch({ type: 'DELETE_LIST', payload: { 'deleteListId': list.id, 'deleteListName': list.tittle } })
                        }} ><i class="fa-solid fa-x"></i></button>
                        <div className='group-header'>

                            <div className="circle" style={{ backgroundColor: list.color }} ></div>
                            <h3>{list.tittle}</h3>
                        </div>
                        <p style={{ color: list.color, fontWeight: 600, fontSize: '0.9rem' }}>
                            {listLengths[list.tittle]}
                        </p>
                    </div>
                ))
            }
        </>


    )
}

