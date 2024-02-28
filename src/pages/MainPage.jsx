import Notes from "../components/Notes";
import Search from "../components/Search";
import AddNotePage from '../pages/AddNotePage';
import UpdateNotePage from "./UpdateNotePage";
import ListPage from "./ListPage";
import AddListPage from "./AddListPage";
import Modal from "../components/Modal";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Lists from "../components/Lists";
import { Toaster } from "react-hot-toast";
import logo from "/logo.svg";

export default function MainPage() {
    const { state } = useContext(DataContext)

    const [isAddNotePage, setIsAddNotePage] = useState(false)
    const [isUpdateNotePage, setIsUpdateNotePage] = useState(false)
    const [isAddListPage, SetIsAddListPage] = useState(false)
    const [isListPage, setIsListPage] = useState(false)
    const [isModal, setIsModal] = useState(false)

    const [modalProperties, setModalProperties] = useState({})
    const [currentId, setCurrentId] = useState(null)
    const [searchVal, setSearchVal] = useState('')
    const [filterListTittle, setFilterListTittle] = useState('All Notes')



    return (
        <div className="main-page-container">
            <Toaster />
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
            {isModal ? <Modal
                setIsModal={setIsModal}
                currentId={currentId}
                modalProperties={modalProperties}
            /> : null}
            <header>
                <div className="logo">
                    <h3> <img style={{ fontSize: '0.2rem' }} src={logo} alt="logo" /> NoteEase </h3>
                </div>

                <div className="search">
                    <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
                </div>

                <div className="buttons ">
                    <button onClick={() => setIsAddNotePage(true)} className={'add-btn'} > Add New Note</button>
                </div>
            </header>

            <main>
                <div className="main-header">
                    <h3> {filterListTittle} </h3>
                </div>
                <Notes
                    searchVal={searchVal}
                    setCurrentId={setCurrentId}
                    setIsUpdateNotePage={setIsUpdateNotePage}
                    setIsListPage={setIsListPage}
                    filterListTittle={filterListTittle}
                    setIsModal={setIsModal}
                    setModalProperties={setModalProperties}
                />
            </main>

            <nav>
                <div className="group all-list" onClick={() => setFilterListTittle('All Notes')}>
                    <div>
                        <h3>All Notes</h3>
                    </div>
                    <p style={{ color: '#a9a9a9', fontWeight: 600, fontSize: '0.9rem' }} >{state.notes.length}</p>
                </div>
                <Lists
                    setFilterListTittle={setFilterListTittle}
                    setIsModal={setIsModal}
                    setModalProperties={setModalProperties}
                />
                <div onClick={() => SetIsAddListPage(true)} className="group add-new-list">
                    <h3 > <i className="fa-solid fa-circle-plus"></i> Add New List </h3>
                </div>
            </nav>
        </div>
    )
}



