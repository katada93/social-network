import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users';
import LoginPage from './components/LoginPage';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/app';

const App = () => {
  const dispatch = useDispatch();
  const { initialized } = useSelector(({ app }) => app);

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return (
      <Spinner
        animation='border'
        variant='danger'
        style={{ display: 'block', margin: '20px auto' }}
      />
    );
  }

  return (
    <div className='App'>
      <Container>
        <Header />
        <Row>
          <Col sm={3}>
            <Navbar />
          </Col>
          <Col sm={9}>
            <Route path='/profile/:userId?'>
              <Profile />
            </Route>
            <Route path='/messages'>
              <Dialogs />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
