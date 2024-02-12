import NoteList from "../components/NotesList";
import Button from "../components/Button";
import Search from "../components/Search";
import AddNotePage from '../pages/AddNotePage';
import UpdateNotePage from "./UpdateNotePage";
import ListPage from "./ListPage";
import { useState } from "react";
import AddListPage from "./AddListPage";
import { handleDeleteList } from "../helpers/listHelpers";

export default function MainPage(props) {
    const [isAddNotePage, setIsAddNotePage] = useState(false)
    const [isUpdateNotePage, setIsUpdateNotePage] = useState(false)
    const [isAddListPage, SetIsAddListPage] = useState(false)
    const [isListPage, setIsListPage] = useState(false)

    const [currentId, setCurrentId] = useState(null)
    const [searchVal, setSearchVal] = useState('')


    return (
        <div className="main-page-container">
            {isAddNotePage ? <AddNotePage
                notes={props.notes}
                setNotes={props.setNotes}
                setIsAddNotePage={setIsAddNotePage}
            /> : null}
            {isUpdateNotePage ? <UpdateNotePage
                notes={props.notes}
                setNotes={props.setNotes}
                setIsUpdateNotePage={setIsUpdateNotePage}
                currentId={currentId}
            /> : null}
            {isAddListPage ? <AddListPage
                SetIsAddListPage={SetIsAddListPage}
                list={props.list}
                setList={props.setList}
            /> : null}
            {isListPage ? <ListPage
                setIsListPage={setIsListPage}
                list={props.list}
                setList={props.setList}
                currentId={currentId}
                notes={props.notes}
                setNotes={props.setNotes}

            /> : null}
            <header>
                <div className="logo">
                    <h3> <i class="fa-solid fa-pencil"></i> my notes </h3>
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
                    <Button onClick={() => setIsAddNotePage(true)} className={'add-btn'} > Add New Note</Button>
                </div>
            </header>
            <main>
                <div className="main-header">
                    <h3> All Notes </h3>
                </div>
                <NoteList
                    notes={props.notes}
                    setNotes={props.setNotes}
                    searchVal={searchVal}
                    setCurrentId={setCurrentId}
                    setIsUpdateNotePage={setIsUpdateNotePage}
                    setIsListPage={setIsListPage}
                    list={props.list}
                />
            </main>
            <nav>
                <div className="group all-list">
                    <div>
                        <div className="circle" style={{ backgroundColor: '#a9a9a9' }}></div>
                        <h3>all notes</h3>
                    </div>
                    <p style={{ backgroundColor: '#a9a9a9', color: 'black' }} >{props.notes.length}</p>
                </div>
                {props.list.map((list) => (
                    <div className="group">
                        <div>
                            {/* <button onClick={() => handleDeleteList(props.list, props.setList, list.id)}> x </button> */}
                            <div class="circle" style={{ backgroundColor: list.color }} ></div>
                            <h3>{list.tittle}</h3>
                        </div>
                        <p style={{ backgroundColor: list.color }}>{list.value}</p>
                    </div>
                ))}
                <div onClick={() => SetIsAddListPage(true)} className="group">
                    <h3> <i class="fa-solid fa-circle-plus"></i> add new list</h3>
                </div>
            </nav>
        </div>
    )
}



