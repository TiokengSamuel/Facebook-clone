import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={user.PhotoURL} title={user.displayName}/>
            <SidebarRow title="Friends"/>
            <SidebarRow title="Pages"/>
            <SidebarRow title="Pages"/>
            <SidebarRow title="Pages"/>
        </div>
    )
}

export default Sidebar
