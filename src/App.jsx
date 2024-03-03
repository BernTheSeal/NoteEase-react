//*css
import './style/app.css';
import './style/header.css';
import './style/main.css';
import './style/nav.css';
import './style/pages.css'
import './style/list-page.css'
import './style/modal.css'

//*components
import Notes from "./components/Notes"
import Search from "./components/Search";
import Lists from "./components/Lists";
import Modal from "./components/Modal";

//*pages
import AddNotePage from './pages/AddNotePage';
import UpdateNotePage from "./pages/UpdateNotePage";
import ListPage from "./pages/ListPage";
import AddListPage from "./pages/AddListPage";

//*react
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import logo from "../logo.svg"
import { useSelector } from 'react-redux';

export default function App() {
  const [isAddNotePage, setIsAddNotePage] = useState(false)
  const [isUpdateNotePage, setIsUpdateNotePage] = useState(false)
  const [isAddListPage, SetIsAddListPage] = useState(false)
  const [isListPage, setIsListPage] = useState(false)
  const [isModal, setIsModal] = useState(false)


  const [searchVal, setSearchVal] = useState('')
  const [filterListTitle, setFilterListTitle] = useState('All Notes')

  const stateNote = useSelector((state) => state.note.value)

  return (
    <div className="main-page-container">
      <Toaster />

      {isAddNotePage ? <AddNotePage
        setIsAddNotePage={setIsAddNotePage}
      /> : null}
      {isUpdateNotePage ? <UpdateNotePage
        setIsUpdateNotePage={setIsUpdateNotePage}
      /> : null}
      {isAddListPage ? <AddListPage
        SetIsAddListPage={SetIsAddListPage}
      /> : null}
      {isListPage ? <ListPage
        setIsListPage={setIsListPage}
      /> : null}
      {isModal ? <Modal
        setIsModal={setIsModal}
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
          <h3> {filterListTitle} </h3>
        </div>
        <Notes
          searchVal={searchVal}
          setIsUpdateNotePage={setIsUpdateNotePage}
          setIsListPage={setIsListPage}
          filterListTittle={filterListTitle}
        />
      </main>

      <nav>
        <div className="group all-list" onClick={() => setFilterListTitle('All Notes')}>
          <div>
            <h3>All Notes</h3>
          </div>
          <p style={{ color: '#a9a9a9', fontWeight: 600, fontSize: '0.9rem' }} >{stateNote.length}</p>
        </div>
        <Lists
          setFilterListTitle={setFilterListTitle}
        />
        <div onClick={() => SetIsAddListPage(true)} className="group add-new-list">
          <h3 > <i className="fa-solid fa-circle-plus"></i> Add New List </h3>
        </div>
      </nav>
    </div>
  )

}
