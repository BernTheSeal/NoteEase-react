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
import AddNoteModal from './modal/AddNoteModal';
import EditNoteModal from "./modal/EditNoteModal";
import ListModal from "./modal/ListModal";
import AddListModal from "./modal/AddListModal";

//*react
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import logo from "../logo.svg"
import { useDispatch, useSelector } from 'react-redux';

//*modalReducers
import { setIsAddListModal } from './features/modal/modalSlice';
import { setIsAddNoteModal } from './features/modal/modalSlice';


export default function App() {
  const [searchVal, setSearchVal] = useState('')
  const [filterListTitle, setFilterListTitle] = useState('All Notes')


  const stateSettings = useSelector((state) => state.preferences.deletingPreferences)
  const stateNote = useSelector((state) => state.note.value)
  const stateModal = useSelector((state) => state.modal)

  const dispatch = useDispatch()

  console.log(stateSettings)

  return (
    <div className="main-page-container">
      <Toaster />

      {stateModal.isAddNoteModal ? <AddNoteModal /> : null}
      {stateModal.isEditNoteModal ? <EditNoteModal /> : null}
      {stateModal.isAddListModal ? <AddListModal /> : null}
      {stateModal.isListPageModal ? <ListModal /> : null}
      {stateModal.isDeletingModal.isModal ? <Modal /> : null}

      <header>
        <div className="logo">
          <h3> <img style={{ fontSize: '0.2rem' }} src={logo} alt="logo" /> NoteEase </h3>
        </div>

        <div className="search">
          <Search searchVal={searchVal} setSearchVal={setSearchVal} icon={'fa-solid fa-magnifying-glass'} />
        </div>

        <div className="buttons ">
          <button onClick={() => dispatch(setIsAddNoteModal(true))} className={'add-btn'} > Add New Note</button>
        </div>
      </header>

      <main>
        <div className="main-header">
          <h3> {filterListTitle} </h3>
        </div>
        <Notes
          searchVal={searchVal}
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
        <div onClick={() => dispatch(setIsAddListModal(true))} className="group add-new-list">
          <h3 > <i className="fa-solid fa-circle-plus"></i> Add New List </h3>
        </div>
      </nav>
    </div>
  )

}
