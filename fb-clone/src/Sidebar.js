import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import localHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StoreFrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://pbs.twimg.com/profile_images/1308041397505855490/z9qBAhAy_400x400.jpg" title="Tiokeng Samuel"/>
            <SidebarRow Icon={localHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StoreFrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        </div>
    )
}

export default Sidebar
