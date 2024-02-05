import { useNavigate } from "react-router-dom";
import NoteList from "../components/NotesList";

export default function MainPage(props) {
    const navigate = useNavigate()
    return (
        <div className="MainPage-container">
            {/*//todo: add Search Component. */}
            {/*//todo: add Button Component. */}
            <button onClick={()=> navigate('add-note')}> add some note </button>
            <NoteList notes={props.notes} setNotes={props.setNotes}/>
            {/*//todo: add group list */}
        </div>
    )
}



