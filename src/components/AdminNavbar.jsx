import React from 'react'
import '../css/AdminNavbar.css'
import { serverUrl } from '../urls'
import Cookies from 'js-cookie'
import axios from 'axios'

const AdminNavbar = ({ setToken }) => {
    const handleLogout = async () => {
        try {
            const response = await axios.post(serverUrl + 'admin/adminLogout')
            Cookies.remove('jwt')
            setToken('')
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    return (
        <div className='admin-navbar-main-container'>
            <div className="admin-logo">
                {/* <img src='' /> */}
                <h2>MSB LINE</h2>
            </div>

            <div className="admin-nav-right-box">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default AdminNavbar