import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'
import Notfound from './Notfound'
import { useState } from 'react'

function App() {
  const [category, setCategory] = useState('general');

  return (
    <BrowserRouter>
      <Navbar category={category} setCategory={setCategory} />
      <Routes>
        <Route path='/' element={<Home category={category} />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
