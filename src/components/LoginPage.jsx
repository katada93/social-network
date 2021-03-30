import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Button, Form } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <div className="login-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }}>Login</h2>
      <LoginForm />
    </div>
  )
}

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6, 'Must be 6 characters or more').required(),
  term: yup.bool().required().oneOf([true], 'Term must be accepted'),
});

const LoginForm = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        login: '',
        password: '',
        term: false
      }}
      onSubmit={({ login, password, term, isStarted }, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          resetForm()
          setSubmitting(false)
        }, 2000);
      }}

    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isSubmitting,
        isValid
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="loginFormLogin">
            <Form.Control
              type="text"
              name="login"
              value={values.login}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.login && !errors.login}
              isInvalid={!!errors.login}
              placeholder="login"
            />
            <Form.Control.Feedback type="invalid">
              {errors.login}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="loginFormPassword">
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
              placeholder="password"
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="term"
              label="Remember me!"
              onChange={handleChange}
              isInvalid={!!errors.term}
              feedback={errors.term}
              id="loginForm"
            />
          </Form.Group>
          <Button type="submit" disabled={isSubmitting || !isValid}>Submit form</Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginPage
