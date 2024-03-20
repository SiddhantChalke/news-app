import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import Notfound from './Notfound'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState('general');

return (
  <BrowserRouter>
          <Navbar setCategory={setCategory} />
          <Routes>
            <Route path='/' element={<Home category={category} />}/>
            <Route path='*' element={<Notfound />}/>
            {/* <Route path='/useeffect' element={<Useeffect />}/> */}
          </Routes>
        </BrowserRouter>
        )
}

export default App
