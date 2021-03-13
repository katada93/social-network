import { useDispatch, useSelector } from 'react-redux'
import { Route } from "react-router-dom"
import './App.scss'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="wrapper">
          <Navbar />
          <div className="content">
            <Route path="/profile">
              <Profile />
            </Route>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
