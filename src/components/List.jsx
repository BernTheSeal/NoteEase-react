import { useDispatch } from "react-redux"
import { deleteList } from "../features/list/listslice"
import { removeAllNoteFromList } from "../features/note/noteSlice"
import { useSelector } from "react-redux"
import { setIsDeletingModal, setModalType } from "../features/modal/modalSlice"
import { setListId } from "../features/list/listslice"


export default function List({ list, index, length, setFilterListTitle }) {
    const listPreferences = useSelector((state) => state.preferences.deletingPreferences.list)
    const dispatch = useDispatch()
    const { title, id, color } = list

    const handleDeleteList = (id, listTitle) => {
        if (listPreferences) {
            dispatch(setIsDeletingModal(true))
            dispatch(setModalType('DELETE-LIST'))
            dispatch(setListId({ id }))
        } else {
            dispatch(deleteList({ id }))
            dispatch(removeAllNoteFromList({ listTitle }))
        }
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