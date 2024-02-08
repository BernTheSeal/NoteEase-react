import React from 'react'

export default function Button({ children, onClick, className }) {
    return (
        <button className={className} onClick={(e) => {
            e.preventDefault()
            onClick()
        }}>
            {children}
        </button>
    )
}

