import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className = "widgets">
           <iframe 
            src="https://web.facebook.com/samuel.tiokeng"
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
