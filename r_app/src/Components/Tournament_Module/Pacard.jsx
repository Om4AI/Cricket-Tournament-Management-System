import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

function Pacard({props,onDelete}){
    const [modalIsOpen,setModalIsOpen] = useState(false);

    return(
        <>
        <div className="card" style={{width:"18rem",margin:"15px",backgroundColor:"white",borderRadius:"3%",color:"black",margin:"10px"}}>
        <img  src={props.img_src} className="card-img-top" alt="img" style={{height:"250px"}}/>
        <div className="card-body">
            <span className="card_title" style={{justifyContent:"center",display:"flex"}}>{props.player_type}</span>
            <h4 className="card-title" style={{marginTop:"5px",backgroundColor:"gray",justifyContent:"center",display:"flex",color:"white",padding:"3px"}}>{props.name}</h4>
            <h6 className="card-text" style={{fontWeight:"bold"}}>Player Info:</h6>
            <p>Player D.O.B:<b style={{paddingLeft:"5px"}}>{props.dob}</b><br></br>Player Age:<b style={{paddingLeft:"5px"}}>{props.age}</b></p>
            <p><a onClick={()=> setModalIsOpen(true)} href="#" className="btn btn-primary">Know more</a> < FaTimes style={{marginLeft:"110px",color:'red', cursor:'pointer'}} onClick={()=>onDelete(props.id)}/></p>
        </div>
        </div>

        <Modal isOpen={modalIsOpen}  style={{overlay:{border:"10px solid white",backgroundImage:`url("https://img.freepik.com/free-photo/dark-green-matt-suede-fabric-velvet-texture_113767-224.jpg?size=626&ext=jpg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}
        ,content:{padding:"10px",top:"65px",bottom:"65px",right:"400px",left:"400px",backgroundColor:"black",borderRadius:"10px",border:"8px solid white"}}}>

        <div>
            <div className="card" style={{marginTop:"25px",color:"black",margin:"auto",width:"70%",alignItems:"center"}}>
            <div className="card-body">
            <h4 className="card-title" style={{textAlign:"center"}}>{props.name}</h4>
            <p className="card-text"> <b>Player Information:</b></p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Date of birth:</b>  {props.dob}</li>
            <li className="list-group-item"><b>Age:</b> {props.age} </li>
            <li className="list-group-item"><b>Player Type:</b> {props.player_type}</li>
            <li className="list-group-item"><b>Gender:</b> {props.gender}</li>
            <li className="list-group-item"><b>Base Price:</b>{` ${props.price} cr`}</li>
            <li style={{textAlign:"center"}} className="list-group-item"><button style={{width:"90px"}} className="btn btn-danger" onClick={()=> setModalIsOpen(false)}>Back</button></li>
            </ul>
            </div>
        </div>       

        </Modal>
        </>
    )
}


export default Pacard