import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className = "widgets">
           <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com"
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
