import { useNavigate } from "react-router-dom";
import NoteList from "../components/NotesList";
import Button from "../components/Button";
import Search from "../components/Search";
import { useState } from "react";

export default function MainPage(props) {
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState('')
    return (
        <div className="main-page-container">
            <header>
                <div className="logo">
                    <h3> <i class="fa-solid fa-pencil"></i> my notes   </h3>
                </div>
                <div className="search">
                    <div>
                        <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
                    </div>
                </div>
                <div class="buttons ">
                    <div class="language">
                        <i class="fa-solid fa-caret-down"></i>
                        EN
                    </div>
                    <label id="switch" class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <Button className={'add-btn'} onClick={() => navigate('add-note')}> Add New Note</Button>
                </div>
            </header>
            <main>
                <div className="main-header">
                    <h3> All Notes </h3>
                </div>
                <NoteList notes={props.notes} setNotes={props.setNotes} searchVal={searchVal} />
            </main>
            <nav>


            </nav>
        </div>
    )
}



