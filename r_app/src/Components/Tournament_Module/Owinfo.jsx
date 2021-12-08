import React from 'react';
import Odata from '../Admin_Module/Odata';
import {x} from '../LoginForm';
 

function Oinfo({data}){
    var x = localStorage.getItem('y')
    var oinf = '';
    // alert(JSON.stringify(data[1]))
    for(var i= 0; i< data.length; i++){
        if(data[i] && data[i].id == x){
            oinf = data[i]
        }
        // alert(1)
    }
    
    // const oinf = Odata[0] /*Odata.find((props)=>props.id===x)*/;
    return(
        <>
        <div id="yourinfo" style={{backgroundColor:"greenyellow",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Your Information</div>
        <section className="sec">
        <div className="container-fluid bg-dark text-white">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12" style={{display:"flex",alignContent:"center",flexWrap:"wrap",border:"10px solid white"}}>
            <img  src={oinf.img_src} className="card-img-top" alt="img" style={{height:"60%",width:"60%",border:"5px solid white",marginLeft:"auto",marginRight:"auto"}}/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" style={{display:"flex",alignItems:"center",border:"10px solid white"}}>
            
            <div className="card" style={{width:"18rem",color:"black",margin:"auto",width:"50%",alignItems:"center"}}>
            <div className="card-body">
            <h4 className="card-title" style={{textAlign:"center"}}>{oinf.name}</h4>
            <p className="card-text"> <b>Owner Information:</b></p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Date of birth:</b>  {oinf.dob}</li>
            <li className="list-group-item"><b>Age:</b> {oinf.age} </li>
            <li className="list-group-item"><b>Owner id:</b> {oinf.owner_id}</li>
            <li className="list-group-item"><b>Gender:</b> {oinf.gender}</li>
            {/* <li className="list-group-item"><b>Tournaments:</b> {oinf.Tnment}</li> */}
            </ul>
            </div>

            </div>
        </div></div>
        </section>
        </>
    )
}

export default Oinfo;