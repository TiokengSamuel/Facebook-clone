import React from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'

function MessageSender() {
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                </form>
            </div>

            
        </div>
    )
}

export default MessageSender
