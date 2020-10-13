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
            image="https://wrcb.images.worldnow.com/images/18806077_G.jpeg"
            profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
            title="Ellen DeGeneres"
            />
            <Story
            image="https://cdn3.whatculture.com/images/2016/10/d7a814a1ba57b4c1-600x338.jpg"
            profileSrc="https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.rsquare.w700.jpg"
            title="Tom Cruise"
            />
            <Story
            image="https://www.positivelyosceola.com/wp-content/uploads/2020/05/spacexmannedlaunch-948x640.jpg"
            profileSrc="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
            title="Elon Musk"
            />
            
        </div>
    )
}

export default StoryReel
