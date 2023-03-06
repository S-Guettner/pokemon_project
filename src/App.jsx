import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import TypesPage from './pages/TypesPage'



function App() {


  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/type' element={<TypesPage />}/>
            <Route path='/details/:id/:mode' element={<Details />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
