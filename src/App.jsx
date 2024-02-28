import './style/app.css';
import './style/header.css';
import './style/main.css';
import './style/nav.css';
import './style/pages.css'
import './style/list-page.css'
import './style/modal.css'
import MainPage from './pages/MainPage'
import { DataProvider } from './context/DataContext.jsx'

function App() {

  return (
    <DataProvider>
      <MainPage />
    </DataProvider>
  )
}

export default App
