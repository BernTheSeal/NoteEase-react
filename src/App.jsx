import './style/app.css';
import './style/header.css';
import './style/main.css';
import './style/nav.css';
import './style/add-note-page.css'
import MainPage from './pages/MainPage'
import { useState, useEffect } from 'react';

function App() {
  const notesStroageData = localStorage.getItem("allNotes") || '[]';
  const listStorageData = localStorage.getItem("allList") || '[]'

  const [notes, setNotes] = useState(JSON.parse(notesStroageData))
  const [list, setList] = useState(JSON.parse(listStorageData))

  useEffect(() => {
    localStorage.setItem("allList", JSON.stringify(list))
  }, [list])

  useEffect(() => {
    localStorage.setItem("allNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <MainPage
      notes={notes}
      setNotes={setNotes}
      list={list}
      setList={setList}
    />
  )
}

export default App
