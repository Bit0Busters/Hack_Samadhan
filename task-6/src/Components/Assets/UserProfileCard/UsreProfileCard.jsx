import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../assets/download.jpeg'
const UserProfileCard = () => {
    return (
        <div className='upc'>
            <div className='gradient'>
                <div className="profile-down">
                    <img src="" alt="" />
                    <div className="profile-title">John Doe</div>
                    <div className="profile-des">Web Developer & Designer</div>
                    <div className="profile-button"><a href="mailto:xyz@123.com">Contact Me</a></div>
                </div>
            </div>
           
        </div>
    )
}

export default UserProfileCard
