
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Navbar } from 'react-bootstrap';
import aboutUs from './Components/aboutUs';
import cart from './Components/cart';
import lineups from './Components/lineups';



function App() {
 const navigate = useNavigate();

  return (
    <>
    <Navbar bg="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>  
    </Navbar>

    <Routes>
      <Route path="/about" element={<aboutUs />} />
      <Route path="/lineup" element={<lineups />} />
    </Routes>
    </>
  )
}

export default App
