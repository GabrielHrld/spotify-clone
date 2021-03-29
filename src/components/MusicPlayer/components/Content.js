import React from 'react'

import '../../../styles/components/MusicPlayer/Content.scss'

const Content = ({children}) => {
  return (
    <div className="content">
      {children}
    </div>
  )
}

export default Content
