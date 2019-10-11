import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import Login from "../Login";
import Registration from "../Registration";
import UserProfile from "../UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (
            <Redirect to="/login"/>
        )}/>
        {/*TODO: add check if user is logged in*/}
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/register'} component={Registration}/>
        <Route exact path={'/users/profile'} component={UserProfile}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
