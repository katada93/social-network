import { Route } from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from "./components/Users/Users";
import './App.scss'

const App = () => {
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
            <Route path="/messages">
              <Dialogs />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
