import React from 'react';
import Nbar from './Nbar';
import Pinfo from './Pinfo';
import Pcarousel from './Pcarousel';
import Necarousel from './Necarousel';
import Vacarousel from './Vacarousel';
import Sdata from '../Admin_Module/Sdata';
import Ndata from '../Admin_Module/Ndata';
import Vdata from '../Admin_Module/Vdata';
import { useState,useEffect } from 'react';
import {x} from '../LoginForm';

var data = [];
function Player(){


  // alert(x)
  var local_x = localStorage.getItem('x')
  var [data,setData] = useState([])
  const [ndata,setNData] = useState(Ndata)
  const [vdata,setVData] = useState(Vdata)

      const loadData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/getPlayer', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          
        })
        setData(await response.json())
      }
      useEffect(()=>{
        loadData();
      }, [])
    
        
      const loadNData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/getNews', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          
        })
        setNData(await response.json())
    
      }
      useEffect(()=>{
        loadNData();
      }, [])
    
      const loadVData = async () => {
        // alert()
        var dat;
        dat = {
          'x': x
        };
        const response = await fetch('http://127.0.0.1:8000/api/getTournament', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify(dat)
          
        })
        setVData(await response.json())
    
      }
      useEffect(()=>{
        loadVData();
      }, [])

      const deleteVCard = (id) => {
        
        setVData(vdata.filter((props)=>props.Tnm!==id))
        console.log(vdata)
        var data1 = {}
        data1 = { 
          'player_id':localStorage.getItem('x'),
          'tournament_name': id
        }
        fetch('http://127.0.0.1:8000/api/delPlayerfromTournament', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data1)
          })
      }
      
      if(localStorage.getItem('isPlayer') == "true"){
    return(
        <div>
        <Nbar/>
        <Pinfo data = {data} />
        <div id="playersDeck" style={{backgroundColor:"cyan",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Player's Deck</div>
        <section className="sec">
        <div className="container-fluid bg-dark text-white">
		<div className="row mb-5 py-3">
			<div className="col-lg-1">
            </div>
            <div className="col-lg-10">
                <Pcarousel data = {data}/>
            </div>
            <div className="col-lg-1">
            </div>
            </div></div>
        </section>

        <div id="newsDeck" style={{backgroundColor:"cyan",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>News Deck</div>
        <section className="sec">
        <div className="container-fluid bg-dark text-white">
		<div className="row mb-5 py-3">
			<div className="col-lg-1">
            </div>
            <div className="col-lg-10">
                <Necarousel ndata = {ndata}/>
            </div>
            <div className="col-lg-1">
            </div>
            </div></div>
        </section>

        <div id="validationDeck" style={{backgroundColor:"cyan",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Tournament Validation</div>

        <section className="sec">
        <div className="container-fluid bg-dark text-white">
            
        <div className="row mb-5 py-3">

        <div className="col-lg-3 col-md-3 col-12" style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
        </div>

			<div className="col-lg-6 col-md-6 col-12">
                <Vacarousel onDel={deleteVCard} vdata = {vdata}/>
            </div>

            <div className="col-lg-3 col-md-3 col-12" style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            </div>
            </div>

        </div>
        </section>
        </div>
    )
}

else{
  return(
  <div>You are not authorized to view this page!</div>
  )
}
}

export {data};
export default Player;