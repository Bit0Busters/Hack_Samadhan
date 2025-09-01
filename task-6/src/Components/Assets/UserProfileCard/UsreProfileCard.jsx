import React from 'react'
import "./UsreProfileCard.css"
import download from '/workspaces/Hack_Samadhan/task-6/src/Components/Assets/download.jpeg'
const UserProfileCard = () => {
    return (
        <div className='upc'>
            <div className='gradient'>
                <div className="profile-down">
                    <img src={download} alt="" />
                    <div className="profile-title">John Doe</div>
                    <div className="profile-des">Web Developer & Designer</div>
                    <div className="profile-button"><a href="mailto:xyz@123.com">Contact Me</a></div>
                </div>
            </div>
           
        </div>
    )
}

export default UserProfileCard
