import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NearMeIcon from "@material-ui/icons/NearMe"
import { ExpandMoreOutlined } from "@material-ui/icons"
import { useStateValue } from './StateProvider'

function Post({ image, timestamp, message}) {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={user.displayName}
                className="post__avatar"
                />
                <div className="post__topInfo">
                    <h3>{user.photoURL}</h3>
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
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Post
