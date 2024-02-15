// import { handleAdditionList } from "../helpers/listHelpers"
import Search from "../components/Search";
import { useState } from "react";
import { handleInputSearch } from "../helpers/inputHelpers";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function ListPage({ setIsListPage, currentId }) {
    const [searchVal, setSearchVal] = useState('')
    const { state, dispatch } = useContext(DataContext)

    return (
        <div className="list-container">
            <div className="list">
                <div className="list-header">
                    <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
                </div>
                <div className="list-main">
                    {state.list.filter(list => (handleInputSearch(list, searchVal, 'LIST'))).map((list) => (
                        <div>
                            <button onClick={() => {
                                dispatch({ type: 'ADDITION_LIST', payload: { 'listId': currentId, 'listName': list.tittle, 'color': list.color } })
                            }} > {list.tittle}</button>
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