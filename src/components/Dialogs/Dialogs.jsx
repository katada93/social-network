import { Formik } from 'formik'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { sendMessage } from '../../redux/dialogs'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import * as yup from 'yup'
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

const schema = yup.object().shape({
  message: yup.string().max(10, 'Must be 6 characters or less').required()
});

const AddMessageForm = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      validationSchema={schema}
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
        handleBlur,
        touched,
        errors,
        values
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="messageForm">
            <Form.Control
              as="textarea"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              isValid={touched.message && !errors.message}
              isInvalid={!!errors.message}
              placeholder="message text"
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Send message</Button>
        </Form>
      )
      }
    </Formik >
  )
}

export default Dialogs
