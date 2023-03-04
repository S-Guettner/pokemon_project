import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import TypesPage from './pages/TypesPage'
import Testpage from './pages/TestPage'


function App() {

// hello //
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/type' element={<TypesPage />}/>

            <Route path='/testpage' element={<Testpage />} />

            <Route path='/details/:id' element={<Details />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
