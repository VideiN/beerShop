
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Link, useNavigate} from 'react-router';
import axios from 'axios'
import {useState, useEffect, use} from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import aboutUs from './routes/AboutUs.jsx';
import Cart from './routes/Cart.jsx';
import Lineups from './routes/Lineups.jsx';
import Admin from './routes/Admin.jsx';
import NavBar from './MadeComponents/NavBar';

function App() {
 const navigate = useNavigate();
//  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
 


  return (
    <>
    {/* <Navbar bg="light">
      <Navbar.Brand onClick={()=>{navigate('/')}}>Navbar</Navbar.Brand>
      <Nav>
        <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/lineup')}}>Lineup</Nav.Link>
        <Nav.Link onClick={()=>{navigate('/cart')}}>🛒</Nav.Link>
      </Nav>
    </Navbar> */}
    <NavBar/>
    <Routes>
      <Route path="/about" element={<aboutUs />} />
      <Route path="/lineup" element={<Lineups />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Admin" element={<Admin />} />

    </Routes>
    </>
  )
}

export default App
