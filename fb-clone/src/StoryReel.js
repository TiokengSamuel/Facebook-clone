import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://bucket.mg.co.za/wp-media/2019/06/f5a37fb1-00-yogan-pillay-south-africa-aids-conference-new-infections-innovations-696x445.jpeg"
            profileSrc="https://pbs.twimg.com/profile_images/1308041397505855490/z9qBAhAy_400x400.jpg"
            title="Tiokeng Samuel"
            />
            <Story
            image="https://s.abcnews.com/images/Politics/trump-biden-splt-2-gty-ps-200929_1601431396895_hpMain_16x9_992.jpg"
            profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQHIrxCXc_vlkg/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=LB8Gipum"
            title=""
            />
            <Story
            image=""
            profileSrc=""
            title=""
            />
            <Story
            image=""
            profileSrc=""
            title=""
            />
            <Story
            image=""
            profileSrc=""
            title=""
            />
            
        </div>
    )
}

export default StoryReel
