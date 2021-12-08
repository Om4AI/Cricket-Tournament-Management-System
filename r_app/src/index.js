import React from 'react';
import ReactDOM from 'react-dom';
import Tournament from './Components/Tournament_Module/Tournament';
import Player from './Components/Player_Module/Player';
import Admin from './Components/Admin_Module/Admin';
import LoginForm from './Components/LoginForm'
import {BrowserRouter, Route, Switch} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/player" component={Player} />
        <Route path="/admin" component={Admin} />
        <Route path="/tournament" component={Tournament} />
      </Switch>
      </BrowserRouter>,document.getElementById("root")
);
