import { Formik } from 'formik'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { sendMessage } from '../../redux/dialogs'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import './Dialogs.scss'

const Dialogs = () => {
  const { dialogs, messages } = useSelector(({ dialogs }) => dialogs)
  const { isAuth } = useSelector(({ auth }) => auth)

  const dialogsElements = dialogs
    .map(({ id, name }) => <DialogsItem key={id} id={id} name={name} />)

  const messagesElements = messages
    .map(({ id, message }) => <Message key={id} id={id} message={message} />)

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
        <AddMessageForm />
      </div>
    </div>
  )
}

const AddMessageForm = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={({ message }, { resetForm }) => {
        if (message) {
          dispatch(sendMessage(message))
          resetForm()
        }
      }}

    >
      {({
        handleSubmit,
        handleChange,
        values
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="messageForm">
            <Form.Control
              as="textarea"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="message text"
            />
          </Form.Group>
          <Button type="submit" >Send message</Button>
        </Form>
      )
      }
    </Formik >
  )
}

export default Dialogs
