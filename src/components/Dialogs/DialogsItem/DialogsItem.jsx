import React from 'react'
import { NavLink } from 'react-router-dom'

import './DialogsItem.scss'

const DialogsItem = ({ id, name }) => {
  return (
    <div className="dialogs-item">
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}

export default DialogsItem