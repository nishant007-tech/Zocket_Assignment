import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Topbar from './components/topbar/topbar';
import Home from './components/home/home';
import { useEffect, useState } from 'react';
import Register from './components/register/register';
import Login from './components/login/login';
import { useDispatch } from 'react-redux'
import { authUser } from './components/actions/actions';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';

function App() {

  const [user, setuser] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(authUser());
        if (response) {
          setuser(response?.payload?.data?.user[0])
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <Router>
      <div className="MainContainer">
        <NotificationContainer />
        <Topbar userData={user} />
        <Switch>
          <Route exact path="/" component={() => < Home userData={user} />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
