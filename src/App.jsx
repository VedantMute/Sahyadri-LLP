import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MainPage from './Components/MainPage'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainPage/>
    <Footer/>
    </>
  )
}

export default App
