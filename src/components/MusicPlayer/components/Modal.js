import React from 'react'

import {  FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import '../../../styles/components/MusicPlayer/Modal.scss'

const Modal = ({children, show, close}) => {
  if(!show) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <FontAwesomeIcon className="icon" icon={faTimes} onClick={close}/>
        {children}
      </div>
    </div>
  )
}

export default Modal
