
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage'
import Chat from './components/Chat'
import SideBar from './components/SideBar'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/main' element={<MainPage/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/side' element={<SideBar/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App
