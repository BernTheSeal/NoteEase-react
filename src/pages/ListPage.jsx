// import { handleAdditionList } from "../helpers/listHelpers"
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { handleInputSearch } from "../helpers/inputHelpers";
import { useDispatch, useSelector } from "react-redux";
import { addNoteToList, removeNoteFromList } from "../features/note/noteSlice";

export default function ListPage({ setIsListPage }) {
    const [searchVal, setSearchVal] = useState('')
    const [currentList, setCurrentList] = useState(null)

    const dispatch = useDispatch()
    const stateList = useSelector((state) => state.list.value)
    const stateNote = useSelector((state) => state.note.value)
    const id = useSelector((state) => state.note.id)

    const handleAddNoteToList = (title, color) => {
        dispatch(addNoteToList({ title, color }))
    }

    const handleRemoveNoteFromList = () => {
        dispatch(removeNoteFromList())
    }

    useEffect(() => {
        const currentNote = stateNote.find(note => note.id === id)
        setCurrentList(currentNote.list)
    }, [stateList, stateNote])

    return (
        <div className="list-container">
            <div className="list">
                <div className="list-header">
                    <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
                </div>
                <div className="list-main">
                    {stateList.filter(list => (handleInputSearch(list, searchVal, 'LIST'))).map((list) => (
                        <div>
                            <button
                                style={{ color: list.color }}
                                onClick={() => {
                                    if (currentList !== list.title) {
                                        handleAddNoteToList(list.title, list.color)
                                    } else {
                                        handleRemoveNoteFromList()
                                    }
                                }} > {list.title}
                                {currentList === list.title ? <i class="fa-solid fa-check"></i> : null}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="list-footer">
                    <button onClick={() => setIsListPage(false)}>Done</button>
                </div>

            </div>
        </div>
    )
}