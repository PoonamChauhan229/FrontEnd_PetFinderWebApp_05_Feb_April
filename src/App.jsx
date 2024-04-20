import { Provider } from 'react-redux'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import { Routes, Route } from "react-router-dom"
import appStore from './utilis/appStore'
import Browse from './Components/Browse'
import Header from './Components/Header'
import Home from './Components/Home'
import NavBar from './Components/NavBar'


function App() {

  return (
   <Provider store={appStore}>
    <NavBar/>
    <Header/>
   <Routes>
     <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/browse" element={<Browse/>}/>
        </Routes>

   </Provider>
  )
}

export default App
