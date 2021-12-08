import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from "react-router";



function Nbar(){
    const [paths, setPath] = useState('')
    function rid(){
        setPath('/')
    }
    if(paths == '/'){
        localStorage.setItem('isPlayer',false)
        localStorage.setItem('isAdmin', false)
        localStorage.setItem('isTournament', false)
        return <Redirect to='/'/>;
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop:"5px"}}>
            <a className="navbar-brand" href="#" style={{fontWeight:"bold"}}>Criclife</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active" href="#yourinfo" >Home <span className="sr-only">(current)</span></a>
                <a className="nav-link active" href="#playersDeck" >Players</a>
                <a className="nav-link active" href="#newsDeck">News</a>
                <a className="nav-link active" href="#validationDeck">Tournament Validation</a>
                </div>
                <div style={{marginLeft:"700px"}}><a onClick={rid} class="btn btn-outline-danger my-2 my-sm-0" type="submit"><b>Log-out</b></a></div>
            </div>
        </nav>
    )
}

export default Nbar;