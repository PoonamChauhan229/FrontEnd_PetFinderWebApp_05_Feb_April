import { Provider } from 'react-redux'
import './App.css'
// import Login from './Components/Login'
import Register from './Components/Register'
import { Routes, Route } from "react-router-dom"
import appStore from './utilis/appStore'
import Browse from './Components/Browse'
// import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Header from './Components/Header'
// import { useState } from 'react'
import AllBreeds from './Components/AllBreeds'
function App() {
  return (
   <Provider store={appStore}>
    <Header/>    
    <Routes>      
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/browse" element={<Browse/>}/>        
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/allbreeds" element={<AllBreeds/>}/>
    </Routes>
    
    <Footer/>
   </Provider>
  )
}

export default App
