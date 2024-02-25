// import { handleAdditionList } from "../helpers/listHelpers"
import Search from "../components/Search";
import { useEffect, useState, useContext } from "react";
import { handleInputSearch } from "../helpers/inputHelpers";
import { DataContext } from "../context/DataContext";

export default function ListPage({ setIsListPage, currentId }) {
    const [searchVal, setSearchVal] = useState('')
    const [currentList, setCurrentList] = useState(null)
    const { state, dispatch } = useContext(DataContext)

    useEffect(() => {
        const currentNote = state.notes.find(note => note.id === currentId)
        setCurrentList(currentNote.list)
    }, [state.notes, state.list])

    return (
        <div className="list-container">
            <div className="list">
                <div className="list-header">
                    <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
                </div>
                <div className="list-main">
                    {state.list.filter(list => (handleInputSearch(list, searchVal, 'LIST'))).map((list) => (
                        <div>
                            <button
                                style={{ color: list.color }}
                                onClick={() => {
                                    if (currentList !== list.tittle) {
                                        dispatch({ type: 'ADDITION_LIST', payload: { 'listId': currentId, 'listName': list.tittle, 'color': list.color } })
                                    } else {
                                        dispatch({ type: 'REMOVE_FROM_LIST', payload: { 'removeListId': currentId } })
                                    }
                                }} > {list.tittle}
                                {currentList === list.tittle ? <i class="fa-solid fa-check"></i> : null}
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