import './App.css'
import MainPage from './pages/MainPage'
import AddNotePage from './pages/AddNotePage';
import EditNotePage from './pages/EditNotePage';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const storageData = localStorage.getItem("allNotes") || '[]';
  const [notes, setNotes] = useState(JSON.parse(storageData))

  //todo: addnotepage ve editnotepage modala donustur.
  //todo: css kodlarini yaz.

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage notes={notes} setNotes={setNotes} />} />
        <Route path='/add-note' element={<AddNotePage notes={notes} setNotes={setNotes} />} />
        <Route path='/edit-note/:id' element={<EditNotePage notes={notes} setNotes={setNotes} />} />
      </Routes>
    </Router>
  )
}

export default App
