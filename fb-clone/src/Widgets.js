import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className = "widgets">
           <iframe 
            src="https://web.facebook.com/search/top/?q=developer%20student%20clubs-university%20of%20buea"
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
