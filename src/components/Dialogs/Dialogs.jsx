import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { sendMessage } from '../../redux/dialogs'
import './Dialogs.scss'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { dialogs, messages } = useSelector(({ dialogs }) => dialogs)
  const { isAuth } = useSelector(({ auth }) => auth)

  const dialogsElements = dialogs
    .map(({ id, name }) => <DialogsItem key={id} id={id} name={name} />)

  const messagesElements = messages
    .map(({ id, message }) => <Message key={id} id={id} message={message} />)

  const onSendMessage = () => {
    if (value) {
      dispatch(sendMessage(value))
    }
    setValue('')
  }

  if (!isAuth) {
    return <Redirect to='/login' />
  }

  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {dialogsElements}
      </div>
      <div className="dialogs-messages">
        <div className="dialogs-messages-items">
          {messagesElements}
        </div>
        <div>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Enter message text...' />
        </div>
        <div>
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
