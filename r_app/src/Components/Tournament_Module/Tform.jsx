import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
import Tcarousel from './Tcarousel'
import Sdata from '../Admin_Module/Sdata';
import Vdata from '../Admin_Module/Vdata';
import Modala from './Modala';
import 'bootstrap/dist/css/bootstrap.min.css';
import { list } from './Tcard';


Modal.setAppElement("#root")
var tdata = Vdata[1];

function Tform() {
    // alert(JSON.stringify({data}))
    const [tnm,settnm] = useState('');
    const [ttype,setttype] = useState('');
    const [sdate,setsdate] = useState('');
    const [edate,setedate] = useState('');
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const [data,setData] = useState(Sdata)
    // const [ndata,setNData] = useState(Ndata)
    const fnm = () =>{
        if(!tnm || !ttype || !sdate || !edate){
            alert('Please fill the form completely');
        }
        else{
            setModalIsOpen(showmodal)
        }
    }


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
    
    function showmodal(){
        if(!tnm){
            return false;
        }
        else{
            return true;
        }
    }
    
    const onSubmit = (e) =>{
        alert("Request sent to the selected players!!")
        // e.preventDefault()
        tdata.id = Math.floor(Math.random()*10000)+1
        tdata.title = tnm
        tdata.type = ttype
        tdata.nm1 = sdate
        tdata.nm2 = edate
        settnm('')
        setttype('')
        setsdate('')
        setedate('')
        var data = {}
        data = {
            'Tnm': tnm,
            'Ttype': ttype,
            'Sdate': sdate ,
            'Edate': edate,
            'list': list
        }
        fetch('http://127.0.0.1:8000/api/addTournament', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          })
          .then( data => data.json())
          .then(
            data => {
                alert("Tournament added successfully!")
            }
          )
          .catch( error => alert("Tournament added successfully!"))

    }

    return(
        <div className="form_div" style={{margin:"auto"}}>
        {/* <form onSubmit={onSubmit}> */}
        <div className="form-group">
            <label for="exampleInputEmail1">Tournament Name :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Tournament Name"  value={tnm} 
            onChange={(e)=> settnm(e.target.value)} />

        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Tournament Type :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Tournament Type" value={ttype} 
            onChange={(e)=> setttype(e.target.value)} />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Start Date :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Start Date (YYYY-MM-DD)" value={sdate} 
            onChange={(e)=> setsdate(e.target.value)} />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">End date :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter End Date (YYYY-MM-DD)" value={edate} 
            onChange={(e)=> setedate(e.target.value)} />
        </div>

        <button className="btn btn-block" onClick={fnm} style={{backgroundColor:"green",color:"white"}}>Add Players</button>

        <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} style={{overlay:{backgroundColor:'grey'},content:{padding:"10px"}}}>
        <div className="container-fluid bg-dark text-white" style={{paddingTop:"10px",borderRadius:"2%",margin:"4px",marginBottom:"0px"}}>
        <Modala tnm ={tnm} ttype={ttype} sdate={sdate} edate={edate}/>

        <div className="row mb-5 py-3">
			<div className="col-lg-2" style={{margin:"auto",textAlign:"center"}}>
                <button className="btn btn-danger" onClick={()=> setModalIsOpen(false)}>Close</button>
            </div>
            <div className="col-lg-8">
                <Tcarousel data = {data}/>
            </div>
            <div className="col-lg-2" style={{margin:"auto",textAlign:"center"}}>
                <button type="submit" className="btn btn-success" onClick={()=> {setModalIsOpen(false);onSubmit(this)}}>Submit</button>
            </div>
        </div>

        <div></div>
        </div>
        </Modal>

        {/* </form> */}
        </div>
    )
}
export {tdata}
export default Tform