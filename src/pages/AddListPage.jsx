import { useState } from "react"
import { handleAddList } from "../helpers/listHelpers"
import { handleInputLimit } from "../helpers/inputHelpers"

export default function AddListPage({ SetIsAddListPage, list, setList }) {
    const [listTittle, setListTittle] = useState('')
    return (
        <div>
            <input type="text" value={listTittle} onChange={(e) => {
                setListTittle(e.target.value)
                handleInputLimit(30, e, 'LIST', listTittle, setListTittle)
            }} />
            <button onClick={() => {
                handleAddList(listTittle, setListTittle, list, setList)
            }}> add list</button>
            <button onClick={() => SetIsAddListPage(false)}>x</button>
        </div>
    )
}