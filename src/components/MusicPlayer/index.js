import React, { useReducer, createContext } from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import PlayBar from './components/PlayBar';
import Content from './components/Content';

import '../../styles/components/MusicPlayer/index.scss';

//STORE
export const StoreContext = createContext(null);

const DEFAULT_PLAYLIST = 'home';

// initialState para el context
const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  playLists: {
    home: new Set(),
    favorites: new Set(),
  },
};

//REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
        return {
          ...state,
          playLists: {...state.playLists, [action.playLists]: new Set()}
        }
    case 'SET_PLAYLIST':
        return {
          ...state,
          currentPlaylist: action.playLists
        }
    default:
      break;
  }
  return state;
};

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="musicPlayer">
        <TopBar />
        <SideBar />
        <Content></Content>
        <PlayBar></PlayBar>
      </div>
    </StoreContext.Provider>
  );
};

export default MusicPlayer;
