import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic="https://pbs.twimg.com/profile_images/1308041397505855490/z9qBAhAy_400x400.jpg"
                message="Wow it worked"
                timestamp="This is a timestamp"
                image={image}
            />
        </div>
    )
}

export default Feed
