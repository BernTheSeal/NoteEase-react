import { useState } from "react"
import { handleAddList } from "../helpers/listHelpers"
import { handleInputLimit } from "../helpers/inputHelpers"

export default function AddListPage({ SetIsAddListPage, list, setList }) {
    const [listTittle, setListTittle] = useState('')
    const [color, setColor] = useState(null)

    const colors = ['#3491a3', '#7eab02', '#8c52ff', '#ff1616', '#ff66c4', '#ff914d ', '#dab82e', '#a6a6a6', '#896363 ']

    return (
        <div className="pages-container">
            <form>
                <div className="form-header">
                    <h3> Add List</h3>
                    <button onClick={() => SetIsAddListPage(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="form-main">
                    <div>
                        {/* add a preview */}
                    </div>
                    <input type="text" placeholder="list name" value={listTittle} onChange={(e) => {
                        setListTittle(e.target.value)
                        handleInputLimit(30, e, 'LIST', listTittle, setListTittle)
                    }} />
                    <div className="color-palet">
                        <h3>choose a color</h3>
                        <div className="colors">
                            {colors.map(color => (
                                <div onClick={() => setColor(color)} className="circle" style={{ backgroundColor: color }}  ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="form-footer">
                    <button className="grn-btn" onClick={(e) => {
                        e.preventDefault()
                        handleAddList(listTittle, setListTittle, list, setList, color, e)
                    }}> Add </button>
                    <button onClick={() => SetIsAddListPage(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}