import './App.css';
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Why from './Pages/Why';
import Testimonial from './Pages/Testimonial';
import NotFound from './Pages/NotFound';
import Product from './Pages/Product';

function App() {
  return (
    <>
    <div className="hero_area"> 
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='why' element={<Why/>}/>
      <Route path='testimonial' element={<Testimonial/>}/>
      <Route path='shop/product' element={<Product/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App;