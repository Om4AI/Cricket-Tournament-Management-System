import React from 'react';
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaTimes } from 'react-icons/fa';

function Ncard({props,onDelete}){
    return(

        <div className="card" style={{width:"18rem",backgroundColor:"white",borderRadius:"3%",color:"black",margin:"10px"}}>
        <img src={props.img_src} className="card-img-top" alt="img" style={{height:"250px"}}/>
        <div className="card-body">
            <h5 className="card-title" style={{marginTop:"5px",backgroundColor:"gray",justifyContent:"center",display:"flex",color:"white",padding:"3px"}}>{props.headline}</h5>
            <p className="card-text">{props.short_info}.</p>
            <p><a href={props.link} className="btn btn-primary">Read more</a> < FaTimes style={{marginLeft:"120px",color:'red', cursor:'pointer'}} onClick={()=>onDelete(props.id)}/></p>
            
        </div>
        </div>
    )
}

export default Ncard