import React from 'react';

import ImageContainer from './ImageContainer';

import setting from '../../assets/icons/settings.png';
import logout from '../../assets/icons/log-out.png';
import profile from '../../assets/icons/profile.png';

const SettingGroup = () => {
    return (
        <div className="flex justify-between px-4">
            <ImageContainer size="75" src={profile} alt="profile" />
            <ImageContainer size="75" src={setting} alt="setting" />
            <ImageContainer size="75" src={logout} alt="logout" />
        </div>
    );
}

export default SettingGroup;