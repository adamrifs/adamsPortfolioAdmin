import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Add from './pages/AdminPannel.jsx'
import Login from './pages/Login.jsx'
import { useState } from 'react'
import Cookies from 'js-cookie'
import Sidebar from './components/Sidebar.jsx'
import AdminNavbar from './components/AdminNavbar.jsx'
import AdminPannel from './pages/AdminPannel.jsx'

function App() {
  const [token, setToken] = useState(Cookies.get('jwt') ? Cookies.get('jwt') : '')
  console.log('token:', token)
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          token === '' ? <Login setToken={setToken} /> :
            <Navigate to='/admin' />} />
        <Route path='/admin' element={
          token !== '' ? < AdminPannel token={token} /> : 
          <Navigate to='/'/>} />

      </Routes>
    </div >
  )
}

export default App
