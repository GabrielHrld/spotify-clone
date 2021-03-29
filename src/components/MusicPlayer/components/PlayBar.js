import React from 'react'

import '../../../styles/components/MusicPlayer/PlayBar.scss'

const Playbar = ({children}) => {
  return (
    <div className="playBar">
      {children}
    </div>
  )
}

export default Playbar
