import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className = "widgets">
           <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F&CleverProgrammerr&tabs=timeline&width=340%height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="Widget"
            width="340"
            height="100%"
            style={{ border: "none", overflow: "hidden"}}
            scrolling="no"
            frameborders="0"
            allow="encrypted-media">
           </iframe> 
        </div>
    )
}

export default Widgets
