import React from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideoIcon from '@material-ui/icons/VideoCall'
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import


function MessageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input
                    className="messageSender__input"
                    placeholder={`What's on your mind`}
                    />
                    <input placeholder="image URL (Optional)"/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                        </button>

                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender_option">
                    <VideoIcon style={{ color: "red" }} />
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
