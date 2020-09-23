import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={user.PhotoURL} title={user.displayName}/>
            <SidebarRow Icon={localHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={} title="Pages"/>
        </div>
    )
}

export default Sidebar
