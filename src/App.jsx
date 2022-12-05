import { useState } from 'react'
import './App.css' 
import Navbar from './components/navbar'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Products/>
    </>
  )
}

export default App
