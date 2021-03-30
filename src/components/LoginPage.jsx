import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Button, Form } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <div className="login-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ width: '35%' }}>Login</h2>
      <LoginForm />
    </div>
  )
}

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6, 'Must be 6 characters or more').required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

const LoginForm = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        login: '',
        password: '',
        terms: false,
      }}
      onSubmit={({ login, password, terms }, { setSubmitting }) => {
        setTimeout(() => {
          console.log(login, password, terms)
          setSubmitting(false);
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
        isSubmitting
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
              feedback={errors.password}
              placeholder="password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Remember me!"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="loginForm"
            />
          </Form.Group>
          <Button type="submit" disabled={isSubmitting}>Submit form</Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginPage
