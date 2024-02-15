import Notes from "../components/Notes";
import Search from "../components/Search";
import AddNotePage from '../pages/AddNotePage';
import UpdateNotePage from "./UpdateNotePage";
import ListPage from "./ListPage";
import { useState } from "react";
import AddListPage from "./AddListPage";

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Lists from "../components/Lists";

export default function MainPage() {
    const { state } = useContext(DataContext)

    const [isAddNotePage, setIsAddNotePage] = useState(false)
    const [isUpdateNotePage, setIsUpdateNotePage] = useState(false)
    const [isAddListPage, SetIsAddListPage] = useState(false)
    const [isListPage, setIsListPage] = useState(false)

    const [currentId, setCurrentId] = useState(null)
    const [searchVal, setSearchVal] = useState('')

    return (
        <div className="main-page-container">
            {isAddNotePage ? <AddNotePage
                setIsAddNotePage={setIsAddNotePage}
            /> : null}
            {isUpdateNotePage ? <UpdateNotePage
                setIsUpdateNotePage={setIsUpdateNotePage}
                currentId={currentId}
            /> : null}
            {isAddListPage ? <AddListPage
                SetIsAddListPage={SetIsAddListPage}
            /> : null}
            {isListPage ? <ListPage
                setIsListPage={setIsListPage}
                currentId={currentId}

            /> : null}
            <header>
                <div className="logo">
                    <h3> <i class="fa-solid fa-pencil"></i> my notes </h3>
                </div>

                <div className="search">
                    <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
                </div>

                <div class="buttons ">
                    <label id="switch" class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <button onClick={() => setIsAddNotePage(true)} className={'add-btn'} > Add New Note</button>
                </div>
            </header>

            <main>
                <div className="main-header">
                    <h3> All Notes </h3>
                </div>
                <Notes
                    searchVal={searchVal}
                    setCurrentId={setCurrentId}
                    setIsUpdateNotePage={setIsUpdateNotePage}
                    setIsListPage={setIsListPage}
                />
            </main>

            <nav>
                <div className="group all-list">
                    <div>
                        <div className="circle" style={{ backgroundColor: '#a9a9a9' }}></div>
                        <h3>all notes</h3>
                    </div>
                    <p style={{ backgroundColor: '#a9a9a9', color: 'black' }} >{state.notes.length}</p>
                </div>
                <Lists />
                <div onClick={() => SetIsAddListPage(true)} className="group">
                    <h3> <i class="fa-solid fa-circle-plus"></i> add new list</h3>
                </div>
            </nav>
        </div>
    )
}



