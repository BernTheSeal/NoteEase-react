import { handleAdditionList } from "../helpers/listHelpers"

export default function ListPage(props) {
    return (
        <div>
            {props.list.map((l) => (
                <div>
                    <button onClick={() => {
                        handleAdditionList(props.currentId, l.tittle, props.notes, props.setNotes, props.list, props.setList)
                    }} > {l.tittle}</button>
                </div>
            ))}
        </div>
    )
}