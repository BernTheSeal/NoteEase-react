import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function Lists() {
    const { state, dispatch } = useContext(DataContext)
    return (
        <>
            {
                state.list.map((list) => (
                    <div className="group">
                        <div>
                            <button onClick={() => {
                                dispatch({ type: 'DELETE_LIST', payload: { 'deleteListId': list.id, 'deleteListName': list.tittle } })
                            }} > x </button>
                            <div class="circle" style={{ backgroundColor: list.color }} ></div>
                            <h3>{list.tittle}</h3>
                        </div>
                        <p style={{ backgroundColor: list.color }}>v</p>
                    </div>
                ))
            }
        </>


    )
}

