import { useState } from 'react'
import { Form } from 'react-router-dom'
import './App.css' 
import Navbar from './components/navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
     
    </>
  )
}

export default App
