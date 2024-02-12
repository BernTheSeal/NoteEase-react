import { handleAdditionList } from "../helpers/listHelpers"
import Search from "../components/Search";
import { useState } from "react";
import { handleInputSearch } from "../helpers/inputHelpers";

export default function ListPage(props) {
    const [searchVal, setSearchVal] = useState('')
    return (
        <div className="list-container">
            <div className="list">
                <div className="list-header">
                    <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
                </div>
                <div className="list-main">
                    {props.list.filter(l => (handleInputSearch(l, searchVal, 'LIST'))).map((l) => (
                        <div>
                            <button onClick={() => {
                                handleAdditionList(props.currentId, l.tittle, props.notes, props.setNotes, props.list, props.setList)
                            }} > {l.tittle}</button>
                        </div>
                    ))}
                </div>
                <div className="list-footer">
                    <button onClick={() => props.setIsListPage(false)}>Done</button>
                </div>

            </div>


        </div>
    )
}