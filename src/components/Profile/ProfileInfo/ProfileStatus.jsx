import React, { useState } from 'react'

const ProfileStatus = ({ status }) => {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState('')

  const activateEditMode = () => setEditMode(true)
  const deActivateEditMode = () => setEditMode(false)

  return (
    <div className="profile-status">
      {!editMode && <span onDoubleClick={activateEditMode}>{status}</span>}
      {editMode && <input onBlur={deActivateEditMode} autoFocus value={status} type="text" />}

    </div>
  )
}

export default ProfileStatus
