import React, {useState} from 'react';
import '../../../styles/components/MusicPlayer/SideBar.scss';
import logo from '../../../assets/images/logo.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ children }) => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    playLists: {
      home: null,
      favorites: null,
    }
  })

  const playLists = Object.keys(state.playLists);

  return (
    <ul className="sideBar">
      <div className="image-logo">
        <img src={logo}/>
      </div>
      <li className="library">Library</li>
      {
        playLists.map(list => (
          <li 
            key={list} 
            className={list === state.currentPlaylist ? 'active' : ''}
            onClick={
              () => {
                setState({...state, currentPlaylist: list})
              }
            }
          >
            {list}
          </li>
        ))
      }
      <li className="newPlaylist">
        <FontAwesomeIcon icon={faPlusCircle} className="addIcon"/>
        <span>New Playlist</span>
      </li>
    </ul>
  );
};

export default SideBar;
