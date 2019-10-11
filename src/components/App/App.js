import React from 'react';
import './App.css';
import {Route, Router, Switch, BrowserRouter} from "react-router-dom";
import Login from "../Login";
import Registration from "../Registration";
import UserProfile from "../UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/register'} component={Registration}/>
        <Route exact path={'/users/profile'} component={UserProfile}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
