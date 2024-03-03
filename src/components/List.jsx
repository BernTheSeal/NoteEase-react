import { useDispatch } from "react-redux"
import { deleteList } from "../features/list/listslice"
import { removeAllNoteFromList } from "../features/note/noteSlice"


export default function List({ list, index, length, setFilterListTitle }) {
    const dispatch = useDispatch()
    const { title, id, color } = list
    console.log(title, id, color)

    const handleDeleteList = (id, listTitle) => {
        dispatch(deleteList({ id }))
        dispatch(removeAllNoteFromList({ listTitle }))
    }
    return (
        <div key={index} className="group" onClick={() => { setFilterListTitle(title) }}>
            <button onClick={(e) => {
                e.stopPropagation()
                handleDeleteList(id, title)
            }} >
                <i class="fa-solid fa-x"></i>
            </button>
            <div className='group-header'>
                <div className="circle" style={{ backgroundColor: color }} ></div>
                <h3>{title}</h3>
            </div>
            <p style={{ color: list.color, fontWeight: 600, fontSize: '0.9rem' }}>
                {length[title]}
            </p>
        </div>
    )
}