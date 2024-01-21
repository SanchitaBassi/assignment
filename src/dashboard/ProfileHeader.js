import React from 'react';
import { BiSolidEdit } from "react-icons/bi";

const ProfileHeader = () => {
    return (
        <div className='profile-header'>

            <h2 className='header-title'>
                Profile
            </h2>
            <div className='edit'>
            <BiSolidEdit className='icon'  />
            </div>
            
        </div>
    );
};

export default ProfileHeader;