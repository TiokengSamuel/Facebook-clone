import React from 'react'
import './SidebarRow.css'

function SidebarRow({title}) {
    return (
        <div class="sidebarRow">
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
