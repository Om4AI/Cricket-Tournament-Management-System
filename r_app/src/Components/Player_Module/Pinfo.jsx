import React, { useState, useEffect } from 'react';

import Sdata from '../Admin_Module/Sdata';
import {x} from '../LoginForm';


function Pinfo({data}){
    var x = localStorage.getItem('x')
    // var pinf; 
    // alert(data)
    // const [pinf,setPData] = useState('')
    // const loadData = async () => {
    //   const response = await fetch('http://127.0.0.1:8000/api/getPlayer', {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'},
        
    //   })
    //   setPData(await response.json() )
    // }
    // useEffect(()=>{
    //   loadData();
    // })
    // pinf = pinf.find((props)=>props.id=== localStorage.getItem('x') );
    // }, [])
    // alert(JSON.stringify(data))
    // var pinf = data.find((props)=>props.id=== localStorage.getItem('x') );
    var pinf = '';
    // alert(JSON.stringify(data[1]))
    for(var i= 0; i< data.length; i++){
        if(data[i] && data[i].id == x){
            pinf = data[i]
        }
        // alert(1)
    }
    // pinf = ''
    // var pinf = data.find((props)=>props.id=== localStorage.getItem('x'))
    return(
        <>
        
        <div id="yourinfo" style={{backgroundColor:"cyan",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Your Information</div>
        <section className="sec">
        <div className="container-fluid bg-dark text-white">
        <div className="row">
            <div className="col" style={{display:"flex",alignContent:"center",flexWrap:"wrap"}}>
            <img  src={pinf.img_src} className="card-img-top" alt="img" style={{height:"60%",width:"60%",border:"5px solid white",marginLeft:"auto",marginRight:"auto"}}/>
            </div>
            <div className="col" style={{display:"flex",alignItems:"center",border:"5px solid white"}}>
            
            <div className="card" style={{width:"18rem",color:"black",margin:"auto",width:"50%",alignItems:"center"}}>
            <div className="card-body">
            <h4 className="card-title" style={{textAlign:"center"}}>{pinf.name}</h4>
            <p className="card-text"> <b>Player Information:</b></p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Date of birth:</b>  {pinf.dob}</li>
            <li className="list-group-item"><b>Age:</b> {pinf.age} </li>
            <li className="list-group-item"><b>Player Type:</b> {pinf.player_type}</li>
            <li className="list-group-item"><b>Gender:</b> {pinf.gender}</li>
            <li className="list-group-item"><b>Base Price:</b> {pinf.price}</li>
            </ul>
            </div>

            </div>
        </div></div>
        </section>
        </>
    )
}

export default Pinfo;