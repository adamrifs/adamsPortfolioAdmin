import React from 'react'
import '../css/Sidebar.css'
import { NavLink } from 'react-router-dom'
import { CiViewList } from "react-icons/ci";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

const Sidebar = ({ setActivePage, activePage }) => {

    return (
        <div className='Admin-sidebar'>
            <div className="admin-sidebar-links">
                <p onClick={() => setActivePage('add')} className={activePage === 'add' ? `active` : ""}>Add Items <MdOutlinePlaylistAdd /></p>
                <p onClick={() => setActivePage('list')} className={activePage === 'list' ? "active" : ""}>List Items <CiViewList /></p>
            </div>
        </div>
    )
}

export default Sidebar