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
            profileSrc="http://fr.web.img4.acsta.net/c_215_290/pictures/20/01/16/09/48/3201727.jpg"
            title="Will Smith"
            />
            <Story
            image=""
            profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
            title="Ellen DeGeneres"
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
