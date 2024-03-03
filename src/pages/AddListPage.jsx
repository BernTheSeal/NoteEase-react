import { useEffect, useState } from "react"
import { addList } from "../features/list/listslice"
import { handleInputLimit } from "../helpers/inputHelpers"
import { useDispatch, useSelector } from "react-redux"

export default function AddListPage({ SetIsAddListPage }) {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState(null)
    const [listArray, setListArray] = useState([])

    const dispatch = useDispatch()
    const state = useSelector((state) => state.list.value)

    useEffect(() => {
        const listTittleArray = []
        for (let key of state) {
            listTittleArray.push(key.title)
        }
        setListArray(listTittleArray)
    }, [state])

    const handleAddList = () => {
        dispatch(addList({ title, color, listArray }))
    }

    const colors = ['#3491a3', '#7eab02', '#8c52ff', '#ff1616', '#ff66c4', '#ff914d ', '#dab82e', '#896363', '#3cb371', '#4682b4', '#ff6347', '#ba55d3', '#ffa500', '#20b2aa ', '#800000', '#ffa07a']

    return (
        <div className="pages-container">
            <form>
                <div className="form-header">
                    <h3> Add List</h3>
                    <button onClick={() => SetIsAddListPage(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="form-main">
                    <input type="text" placeholder="list name" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                        handleInputLimit(30, e, 'LIST', title, setTitle)
                    }} />
                    <div className="color-palet">
                        <h3>Choose a Color</h3>
                        <div className="colors">
                            <div className="colors-row">
                                {colors.slice(0, 8).map(clr => (
                                    <div onClick={() => setColor(clr)} className="circle" style={{ backgroundColor: clr }}  >
                                        {color === clr
                                            ? <i class="fa-solid fa-check"></i>
                                            : null}
                                    </div>
                                ))}
                            </div>
                            <div className="colors-row">
                                {colors.slice(8, 16).map(clr => (
                                    <div onClick={() => setColor(clr)} className="circle" style={{ backgroundColor: clr }}  >
                                        {color === clr
                                            ? <i class="fa-solid fa-check"></i>
                                            : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-footer">
                    <button className="grn-btn" onClick={(e) => {
                        e.preventDefault()
                        handleAddList()
                    }}> Add </button>
                    <button onClick={() => SetIsAddListPage(false)}>Cancel</button>
                </div>
            </form >
        </div >
    )
}