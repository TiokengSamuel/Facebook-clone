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
                
                message="No Malaria!"
                timestamp="This is a timestamp"
                image="https://bucket.mg.co.za/wp-media/2019/06/f5a37fb1-00-yogan-pillay-south-africa-aids-conference-new-infections-innovations-696x445.jpeg"
            />
            <Post
                
                message="Facebook clone looking awesome"
                timestamp="This is a timestamp"username="Tiokeng Samuel"
                
            />
        </div>
    )
}

export default Feed
