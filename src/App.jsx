import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users';
import LoginPage from './components/LoginPage';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';

const App = () => {
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
