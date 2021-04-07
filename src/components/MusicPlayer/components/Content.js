import React, {useContext} from 'react'
import { StoreContext } from '../index';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heart_solid } from "@fortawesome/free-solid-svg-icons";
import '../../../styles/components/MusicPlayer/Content.scss'

const Content = () => {
  const {state, dispatch} = useContext(StoreContext);
  const currentPlaylist = state.currentPlaylist
  const songIds = Array.from(state.playLists[currentPlaylist])

  return (
    <div className="content">
      <div className="playlist_title">{currentPlaylist}</div>
      {
        songIds.length <= 0 ? (
          <p>Your playlist is empty. Start by adding some songs!</p>
        ) : (
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Title</td>
              <td>Artist</td>
              <td>Length</td>
            </tr>
          </thead>
  
          <tbody>
            {songIds.map((id) => {
              const {title, artist, length} = state.media[id]
              const isFavorite = state.playLists.favorites.has(id)
              return (
                <tr key={id}>
                  <td>
                    {
                      isFavorite ? 
                        <FontAwesomeIcon icon={heart_solid} className="icon" onClick={() => {
                          dispatch({type: 'REMOVE_FAVORITE', songId: id})
                        }}/> 
                        : <FontAwesomeIcon icon={faHeart} className="icon" onClick={()=>{
                          dispatch({type: 'ADD_FAVORITE', songId: id})
                          console.log(id)
                        }} />
                    }
                    
                    
                  </td>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{length}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        )
      }
      
    </div>
  )
}

export default Content
