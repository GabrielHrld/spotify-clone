import React from 'react'

import '../../../styles/components/MusicPlayer/TopBar.scss'

const TopBar = ({children}) => {
  return (
    <div className="topbar">
      {children}
    </div>
  )
}

export default TopBar
