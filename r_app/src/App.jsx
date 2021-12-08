import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Player from './Components/Player_Module/Player';
import Admin from './Components/Admin_Module/Admin';
import LoginForm from './Components/LoginForm';
import Sdata from './Components/Admin_Module/Sdata';


function App(){



    return(
        <>
        <LoginForm/> 
        </>
    )
}

export default App;