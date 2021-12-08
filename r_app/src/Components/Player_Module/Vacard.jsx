import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Vacard({props,onDelete}){
  const[accept,setAccept] = useState('Accept');
  const[stat,setStat] = useState(true);
  const[clr,setclr] = useState("btn btn-success")
  const func = () =>{
    setAccept('Accepted');
    setStat(false);
    setclr("btn btn-secondary");
  }
    return(
        <>
        <div className="card" style={{width:"18rem",color:"black",marginTop:"15px"}}>
        <div className="card-body">
          <h5 className="card-title">Name: {props.Tnm}</h5>
          <p className="card-text">Tournament details :-</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Format:</b>  {props.Ttype}</li>
          <li className="list-group-item"><b>From:</b> {props.Sdate} </li>
          <li className="list-group-item"><b>To:</b> {props.Edate}</li>
        </ul>
        <div className="card-body">
        <button onClick={func}  className={clr}>{accept}</button>
        {
          stat? <a onClick={()=>onDelete(props.Tnm)} className="btn btn-danger" style={{marginLeft:"100px"}}>Reject</a>: null
        }
        </div>
        </div>
        </>
       ) 
}

export default Vacard;