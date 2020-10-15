import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className = "widgets">
           <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F&CleverProgrammerr2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="Widget"
            width="340"
            height="100%"
            style={{ border: "none", overflow: "hidden"}}
            scrolling="no"
            frameborders="0"
            allowTransparency="true"
            allow="encrypted-media">
           </iframe> 
        </div>

        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FDscUbuea&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    )
}

export default Widgets
