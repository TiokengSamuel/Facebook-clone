import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"
                />
                <div className="post__topInfo">
                    <h3>{}</h3>
                </div>

            </div>
        </div>
    )
}

export default Post
