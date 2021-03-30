import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../../redux/profile'

const ProfileStatus = () => {
  const dispatch = useDispatch()
  const { status } = useSelector(({ profile }) => profile)

  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(status)

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const activateEditMode = () => setEditMode(true)
  const deActivateEditMode = () => {
    setEditMode(false)
    dispatch(updateStatus(value))
  }

  return (
    <div className="profile-status">
      {!editMode && <span onDoubleClick={activateEditMode}>{status || 'no status'}</span>}
      {editMode && <input onBlur={deActivateEditMode} autoFocus value={value} onChange={handleChange} type="text" />}
    </div>
  )
}

export default ProfileStatus
