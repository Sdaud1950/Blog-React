import { useState } from 'react'
import blogData from './data'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Blog from './Component/Blog'
import './App.css'


function App() {

  return (
    <>
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            <Route path='/Blog' element={<Blog/>} />

          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App
