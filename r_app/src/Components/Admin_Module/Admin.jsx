import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Nform from './Nform';
import Oform from './Oform';
import Ocarousel from './Ocarousel'
import Carousell from './Carousell';
import Ncarousel from './Ncarousel';
import Vcarousel from './Vcarousel';
import Sdata from './Sdata';
import Ndata from './Ndata';
import Vdata from './Vdata';
import Odata from './Odata';
import { useState,useEffect } from 'react'

var data = ''
function Admin(){

    var [data,setData] = useState(Sdata)
    const [ndata,setNData] = useState(Ndata)
    const [vdata,setVData] = useState(Vdata)
    const [odata,setOData] = useState(Odata)
    

    const loadData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/getPlayer', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      
    })
    setData(await response.json())
    // Sdata = await response.json()
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


  const loadVData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/getTournament', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      
    })
    setVData(await response.json())
    // alert(JSON.stresponse.json())

  }
  useEffect(()=>{
    loadVData();
  }, [])

    const addTask = (props) => {
        const newTask = {...props}
        setData([...data,newTask])
      }

      const addNTask = (props) => {
        const id = Math.floor(Math.random()*10000)+1
        const newTask = {id,...props}
        setNData([...ndata,newTask])
      }

      const addOTask = (props) => {
        const newTask = {...props}
        setOData([...odata,newTask])
      }

      const deleteCard = (id) => {
        setData(data.filter((props)=>props.id!==id))
        console.log(data)
        var data1 = {}
        data1 = {
          'player_id':id
        }
        fetch('http://127.0.0.1:8000/api/delPlayer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data1)
          })
        }

    
      const deleteNCard = (id) => {
        setNData(ndata.filter((props)=>props.id!==id))
        console.log(ndata)
        var data1 = {}
        data1 = {
          'id':id
        }
        fetch('http://127.0.0.1:8000/api/delNews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data1)
          })
      }

      const deleteVCard = (id) => {
        
        setVData(vdata.filter((props)=>props.Tnm!==id))
        console.log(vdata)
        var data1 = {}
        data1 = {
          'id':id
        }
        fetch('http://127.0.0.1:8000/api/delTournament', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data1)
          })
      }

      const deleteOCard = (id) => {
        setOData(odata.filter((props)=>props.owner_id!==id))
        console.log(odata)
        var data1 = {}
        data1 = {
          'owner_id':id
        }
        fetch('http://127.0.0.1:8000/api/delOwn', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data1)
          })
      }
      if(localStorage.getItem('isAdmin') == "true"){
    return(
        <div>
        <Navbar/>
        <div id="playersDeck" style={{backgroundColor:"orange",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Player's Deck</div>
        <section className="sec">
        <div className="container-fluid bg-dark text-white">
		<div className="row mb-5 py-3">
			<div className="col-lg-6 col-md-6 col-12">
                <Carousell style={{margin:"auto"}} onDel={deleteCard} data = {data}/>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
            <Form onAdd={addTask}/>
            </div>
            </div></div>
        </section>

        <div id="ownersDeck" style={{backgroundColor:"orange",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Owner's Deck</div>
        <section className="sec">
        <div className="container-fluid bg-dark text-white">
		<div className="row mb-5 py-3">
			<div className="col-lg-6 col-md-6 col-12">
            <Oform onAdd={addOTask}/>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
            <Ocarousel onDel={deleteOCard} data = {odata}/>
            </div>
            </div></div>
        </section>

        <div id="newsDeck" style={{backgroundColor:"orange",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>News Deck</div>

        <section className="sec">
        <div className="container-fluid bg-dark text-white">
            <div className="row mb-5 py-3">
              
            <div className="col-lg-9 col-md-9 col-12">
            <Ncarousel onDel={deleteNCard} ndata = {ndata}/>
            </div>
            <div className="col-lg-3 col-md-3 col-12" style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Nform onAdd={addNTask}/>
            </div>
            </div></div>
        </section>

        <div id="validationDeck" style={{backgroundColor:"orange",textAlign:"center",padding:"20px",textTransform:"capitalize",fontSize:"30px",fontWeight:"bolder"}}>Tournament Validation</div>

        <section className="sec">
        <div className="container-fluid bg-dark text-white">
            
        <div className="row mb-5 py-3">

        <div className="col-lg-3 col-md-3 col-12" style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
        </div>

			<div className="col-lg-6 col-md-6 col-12">
                <Vcarousel onDel={deleteVCard} vdata = {vdata}/>
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
export default Admin;