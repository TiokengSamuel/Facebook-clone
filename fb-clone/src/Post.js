import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>This is a date</p>
                </div>

            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
            </div>
        </div>
    )
}

export default Post
