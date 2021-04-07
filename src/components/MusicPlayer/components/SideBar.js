import React, {useState, useRef} from 'react';
import '../../../styles/components/MusicPlayer/SideBar.scss';
import logo from '../../../assets/images/logo.png';
import Modal from './Modal';
import Toast from './Toast';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ children }) => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    modal: false,
    playLists: {
      home: new Set(),
      favorites: new Set(),
      
    },
    toast: ''
  })

  const playlistRef = useRef(null)
  const playLists = Object.keys(state.playLists);

  const addPlaylist = e => {
    e.preventDefault()
    const list = playlistRef.current.value

    setState({
      ...state,
      modal: false,
      playLists: { ...state.playLists, [list]: new Set()},
      toast: 'Your playlist was created successfully'
    })
  }

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
      <li 
        className="newPlaylist"
        onClick={() => {setState({...state, modal: true})}}
      >
        <FontAwesomeIcon icon={faPlusCircle} className="addIcon"/>
        <span>New Playlist</span>
      </li>

      <Modal 
      show={state.modal}
      close={() => {setState({...state, modal: false})}}
      >
        <form onSubmit={addPlaylist}>
          <div className="title">New Playlist</div>

          <div className="content-wrap">
            <input
            type="text"
            placeholder="My Playlist"
            required
            ref={playlistRef}
            />

            <br/>
            <button type="submit">Create</button>
          </div>
        </form>
      </Modal>
      <Toast toast={state.toast} close={() => {
        setState({...state, toast: ''})
      }}>

      </Toast>
    </ul>
  );
};

export default SideBar;
