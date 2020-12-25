import React from 'react';
import { Link } from 'react-router-dom';

import ImageContainer from './ImageContainer';

import setting from '../../assets/icons/settings.png';
import profile from '../../assets/icons/profile.png';
import iconLogout from '../../assets/icons/log-out.png';

const SettingGroup = ({ pass }) => {
    
    const logout = () => {
        pass(false)
        localStorage.removeItem('oauth-token')
    }

    return (
        <div className="flex justify-between px-4">
            <Link to='/profile'>
                <ImageContainer size="75" src={profile} alt="profile" />
            </Link>
            <Link to="/setting">
                <ImageContainer size="75" src={setting} alt="setting" />
            </Link>
            <button onClick={()=>logout()}>
                <ImageContainer size="75" src={iconLogout} alt="logout" />
            </button>
        </div>
    );
}

export default SettingGroup;