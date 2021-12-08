import React from 'react';
import Owinfo from './Owinfo';
import Nabar from './Nabar';
import Necarousel from './Necarousel';
import Pacarousel from './Pacarousel';
import Sdata from '../Admin_Module/Sdata';
import Odata from '../Admin_Module/Odata';
import Ndata from '../Admin_Module/Ndata';
import Tform from './Tform'
import { useState,useEffect } from 'react';


function Tournament(){
    const [data,setData] = useState(Sdata)
    const [ndata,setNData] = useState(Ndata)
    const [odata,setOData] = useState(Odata)


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

      const loadOData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/getOwn', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          
        })
        setOData(await response.json())
    
      }
      useEffect(()=>{
        loadOData();
      }, [])

    return(
        <>
        <Nabar/>
        <Owinfo data={odata}/>

        <div id="playersDeck" style={{backgroundColor:"greenyellow",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Player's Deck</div>
        <section className="sec" style={{border:"10px solid white"}}>
        <div className="container-fluid bg-dark text-white">
		<div className="row mb-5 py-3">
			<div className="col-lg-1">
            </div>
            <div className="col-lg-10">
                <Pacarousel data = {data}/>
            </div>
            <div className="col-lg-1">
            </div>
            </div></div>
        </section>

        <div id="newsDeck" style={{backgroundColor:"greenyellow",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>News Deck</div>
        <section className="sec" style={{border:"10px solid white"}}>
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
        <div id="createtournament" style={{backgroundColor:"greenyellow",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Create tournament</div>
        <section className="sec" style={{border:"10px solid white"}}>
        <div className="container-fluid bg-dark text-white">
		<div className="row mb-5 py-3">
			<div className="col-lg-3">
            </div>
            <div className="col-lg-6">
                <Tform/>
            </div>
            <div className="col-lg-3">
            </div>
            </div></div>
        </section>
        
        </>
    )
}

export default Tournament;