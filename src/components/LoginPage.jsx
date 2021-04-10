import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth';
import { Redirect } from 'react-router';

const LoginPage = () => {
  const { isAuth, authWrang } = useSelector(({ auth }) => auth);

  if (isAuth) {
    return <Redirect to='/profile' />;
  }

  return (
    <div
      className='login-page'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }}>
        Login
      </h2>
      <LoginForm />
      {authWrang ? (
        <span style={{ color: '#dc3545' }}>Something is gone be wrong!(</span>
      ) : null}
    </div>
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('No email provided.'),
  password: yup
    .string()
    .min(6, 'Must be 6 characters or more')
    .required('No password provided.'),
  term: yup.bool().required().oneOf([true], 'Term must be accepted'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        email: '',
        password: '',
        term: false,
      }}
      onSubmit={({ email, password, term }, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          dispatch(login(email, password, term));
          resetForm();
          setSubmitting(false);
        }, 1000);
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
        isValid,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId='loginFormEmail'>
            <Form.Control
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.email && !errors.email}
              isInvalid={!!errors.email}
              placeholder='email'
            />
            <Form.Control.Feedback type='invalid'>
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='loginFormPassword'>
            <Form.Control
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
              placeholder='password'
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name='term'
              label='Remember me!'
              onChange={handleChange}
              isInvalid={!!errors.term}
              feedback={errors.term}
              id='loginForm'
            />
          </Form.Group>
          <Button type='submit' disabled={isSubmitting || !isValid}>
            Submit form
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
