import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Footer from './Components/Footer';
import Drinks from './Pages/Drinks';
import Sandwich from './Pages/Sandwich';
import About from './Pages/About';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Homepage/>}/>

        {/* About Page */}
        <Route path='/About' element={<About/>}/>

        {/* Drinks Page */}
        <Route path='/Drinks' element={<Drinks/>}/>
        {/* Sandwich Page */}
        <Route path='/Sandwiches' e