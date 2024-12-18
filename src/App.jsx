
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Auth from './pages/Auth'
import './bootstrap.min (1).css'
import AdminDashboard from './pages/AdminDashboard'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth  insideRegister={true}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
      
    </>
  )
}

export default App
