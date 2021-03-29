import React from 'react';
import '../../../styles/components/MusicPlayer/SideBar.scss';
import logo from '../../../assets/images/logo.png';

const SideBar = ({ children }) => {
  return (
    <div className="sideBar">
      <div className="image-logo">
        <img src={logo}/>
      </div>
      {children}
    </div>
  );
};

export default SideBar;
