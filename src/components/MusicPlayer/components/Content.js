import React, {useContext} from 'react'
import { StoreContext } from '../index';

import '../../../styles/components/MusicPlayer/Content.scss'

const Content = ({children}) => {
  const {state} = useContext(StoreContext);
  return (
    <div className="content">
      {state.currentPlaylist}
      {/* {children} */}
    </div>
  )
}

export default Content
