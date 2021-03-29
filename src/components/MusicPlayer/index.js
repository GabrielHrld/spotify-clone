import React from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import PlayBar from './components/PlayBar';
import Content from './components/Content';

import '../../styles/components/MusicPlayer/index.scss'

const MusicPlayer = () => {
  return (
    <div className="musicPlayer">
      <TopBar />
      <SideBar></SideBar>
      <Content></Content>
      <PlayBar></PlayBar>
    </div>
  );
};

export default MusicPlayer;
