import React from 'react';
import {useState} from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css'

var list = []
function Tcard({props}){
    const[req,setReq] = useState('Send Request');
    const[clr,setclr] = useState("btn btn-primary")
    const onSubmit = (e) =>{
        setReq('Request sent');
        setclr("btn btn-success");
        if(!list.includes(props.player_id)){
            list.push(props.player_id)
        }
        
        // alert(list)
        // data = {
        //     'player_id': props.id
        // }
        // fetch('http://127.0.0.1:8000/api/addTournament', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(data)
        //   })
        //   .then( data => data.json())
        //   .then(
        //     data => {
        //         alert("Tournament added successfully!")
        //     }
        //   )
        //   .catch( error => alert("Tournament added successfully!"))

    }

    return(

        <div className="card" style={{width:"14rem",margin:"15px",backgroundColor:"white",borderRadius:"3%",color:"black",margin:"10px"}}>
        <div style={{margin:"auto"}}><img  src={props.img_src} className="card-img-top" alt="img" style={{height:"200px",width:"200px"}}/></div>
        <div className="card-body">
            <h4 className="card_title" style={{marginTop:"3px",backgroundColor:"gray",justifyContent:"center",display:"flex",color:"white",padding:"3px"}}>{props.name}</h4>
            <h6 className="card-title" style={{justifyContent:"center",display:"flex"}} ><b>Base Price:</b>{` ${props.price} cr`}</h6>
            <p style={{textAlign:"center"}}><button className={clr} onClick={onSubmit}>{req}</button> </p>
        </div>
        </div>
    )
}

export {list};
export default Tcard