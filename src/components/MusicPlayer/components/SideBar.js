import React, {useState, useRef, useContext} from 'react';
import '../../../styles/components/MusicPlayer/SideBar.scss';
import { StoreContext } from '../index';
import logo from '../../../assets/images/logo.png';
import Modal from './Modal';
import Toast from './Toast';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ children }) => {
  //STATE
  const [sidebarState, setState] = useState({
    modal: false,
    toast: ''
  })

  const { state, dispatch} = useContext(StoreContext);

  //REFERENCIAS AL INPUT PARA AÑADIR PLAYLIST
  const playlistRef = useRef(null)
  const playLists = Object.keys(state.playLists);

  const addPlaylist = e => {
    e.preventDefault()
    const list = playlistRef.current.value

    dispatch({type: 'ADD_PLAYLIST', playLists: list})

    setState({
      ...state,
      modal: false,
      toast: 'Your playlist was created successfully'
    })
  }

  //Toggle del modal
  const handleModal = () => {setState({...sidebarState, modal: !sidebarState.modal})}

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
                dispatch({type: 'SET_PLAYLIST', playLists: list })
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
      show={sidebarState.modal}
      close={handleModal}
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
      <Toast toast={sidebarState.toast} close={() => {
        setState({...sidebarState, toast: ''})
      }}>
      </Toast>
    </ul>
  );
};

export default SideBar;
