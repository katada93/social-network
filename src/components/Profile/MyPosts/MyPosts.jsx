import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post/Post'
import { addPost } from '../../../redux/profile'
import { Formik } from 'formik'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './MyPosts.scss'

const MyPosts = () => {
  const { posts } = useSelector(({ profile }) => profile)

  const postsElements = posts
    .map(({ id, message, likesCount }) => <Post key={id} id={id} message={message} likesCount={likesCount} />)

  return (
    <div>
      <Container>
        <h2>My posts</h2>
        <Row>
          {postsElements}
          <Col sm={8}>
            <AddNewPostForm />
          </Col>
        </Row>
      </Container>
    </div >
  )
}

const AddNewPostForm = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={({ message }, { resetForm }) => {
        if (message) {
          dispatch(addPost(message))
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
          <Form.Group controlId="postForm">
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

export default MyPosts