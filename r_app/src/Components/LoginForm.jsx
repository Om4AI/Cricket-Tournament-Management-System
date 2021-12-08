import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { getAllByLabelText } from '@testing-library/dom';
import {Link } from "react-router-dom";
import Modal from 'react-modal'
import { Redirect } from "react-router";



var x=2;
function LoginForm({ setToken,onAdd }){


  // [x, setX] = useState('')
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [pmodalIsOpen,setPModalIsOpen] = useState(false);
  const [omodalIsOpen,setOModalIsOpen] = useState(false);
  const [Em, setEm] = useState('');
  const [Ps,setPs] = useState('');
  const [Id,setId] = useState('');
  const [Img,setImg] = useState('');
  const [Nm,setNm] = useState('');
  const [Dob,setDob] = useState('');
  const [Age,setAge] = useState('');
  const [Pass1,setPass1] = useState({
    password: "",
    showPassword: false,
  });
  const [Gen,setGen] = useState('');
  const [Password,setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const [Type,setType] = useState('');
  const [Price,setPrice] = useState('');

  const handleClickShowPassword = () => {
    setPass1({ ...Pass1, showPassword: !Pass1.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setPassword({ ...Password, [prop]: event.target.value });
  };
  
  const handleClickShowPasswordp = () => {
    setPassword({ ...Password, showPassword: !Password.showPassword });
  };
  
  const handleMouseDownPasswordp = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChangep = (prop) => (event) => {
    setPassword({ ...Password, [prop]: event.target.value });
  };
  // var paths = ''
  // const 
  const [paths, setPath] = useState('')
  // var paths = ''

    // if (Em==="aryaman.singh2142@gmail.com" && Ps==="abcd"){
    //   paths =  "/player";
    //   x = "1";
    // }
    // else if(Em==="ujjwal@gmail.com"){
    //     paths = "/admin";
    //     x = 1;
    // }
    // else if(Em==="ryaman.singh2142@gmail.com" && Ps==="abcd"){
    //   x = "bjhb"
    //   paths = "/tournament";
    // }
    // paths = "/admin"
    // paths = "/player"
    // const loadData = async () => {
    //   const response = await fetch('http://127.0.0.1:8000/api/getPlayer', {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'},
        
    //   })
    //   setData(await response.json())
    // }
    // useEffect(()=>{
    //   loadData();
    // }, [])
    const onsubmit1 = async (e) =>{
      e.preventDefault()

      // const [Id,setId] = useState('');
      // const [Img,setImg] = useState('');
      // const [Nm,setNm] = useState('');
      // const [Dob,setDob] = useState('');
      // const [Age,setAge] = useState('');
      // const [Type,setType] = useState('');
      // const [Gen,setGen] = useState('');
      // const [Price,setPrice] = useState('');
      // const [Password,setPassword] = useState('');

      // setAdd({Id,Img,Nm,Dob,Age,Type,Gen,Price,Password})
      setId('')
      setImg('')
      setNm('')
      setDob('')
      setAge('')
      setType('')
      setGen('')
      setPrice('')
      setPassword(Password="")
      if(!Id){
        alert('Please fill the form completely')
        return
    }
      var data = {}
      data = {
          'img_src': Img,
          'name': Nm,
          'dob': Dob ,
          'age': Age,
          'player_type': Type,
          'price':Price,
          'gender': Gen,
          'player_id':Id,
          'password':Password.password
          
      }
      fetch('http://127.0.0.1:8000/api/addPlayer', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then( data => data.json())
        .then(
          data => {
              alert(data.message)
          //   this.props.userLogin(data.token);
          }
        )
        .catch( error => alert(error))

  }
  const onsubmit2 = (e) =>{



    e.preventDefault()
    if(!Img){
        alert('Please fill the form completely')
        return
    }

    //setToken({Id,Img,Nm,Dob,Age,Gen,Tnm})
    setId('')
    setImg('')
    setNm('')
    setDob('')
    setAge('')
    setGen('')
    // setTnm([])
    setPass1(Password="")
    

 
    var data = {}
    data = {
        'img_src': Img,
        'name': Nm,
        'dob': Dob ,
        'age': Age,
        'gender': Gen,
        'owner_id':Id,
        // 'tournamentname': Tnm,
        'password': Pass1.password
       
    }
    fetch('http://127.0.0.1:8000/api/addOwn', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then( data => data.json())
      .then(
        data => {
            alert("Owner Added successfully!")
        //   this.props.userLogin(data.token);
        }
      )
      .catch( error => alert(error))

}

// return (<Link to='/player'></Link>)
  const onsubmit = (e) =>{
    if(Em==="ujjwal" && Ps ==="ujjwal"){
      localStorage.setItem('isPlayer',false)
      localStorage.setItem('isAdmin', true)
      localStorage.setItem('isTournament', false)
      alert('Admin Logged In successfully!')
      setPath('/admin')
      return
    }
    
    // var [paths, setPath] = useState('')
    // alert(12)
    x = Em;
    e.preventDefault()
    // setEm('')
    // setPs('')  
    
    var data = {}
    data = {
        'email_id': Em,
        'password': Ps,
    }
    // paths = '/admin'
    fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then( data => data.json())
      .then(
        data => {
          //alert(JSON.stringify(data))

          

          if(data.message === 'player'){
            x = data['id']
            localStorage.setItem('x', x);
            localStorage.setItem('isPlayer',true)
            localStorage.setItem('isAdmin', false)
            localStorage.setItem('isTournament', false)
            alert('Player Logged In successfully!')
            setPath('/player')
          }
          else if(data.message==='admin'){
            alert('admin logged in successfully!!')
            setPath('/admin')
          }
          else if(data.message === 'owner'){
            x = data.id
            localStorage.setItem('y', data.id);
            localStorage.setItem('isPlayer',false)
            localStorage.setItem('isAdmin', false)
            localStorage.setItem('isTournament', true)
            alert('Owner Logged In successfully!')
            setPath('/tournament')
          }
          
        // paths = '/player'
        }
      )
      .catch( error => alert(error))
      
}

  // return (<Link to='/player'/>);
  if (paths == '/player') {
    
    return <Redirect to='/player'/>;
  }
  else if (paths == '/admin') {
    return <Redirect to='/admin'/>;
  }
  else if (paths == '/tournament') {
    return <Redirect to='/tournament'/>;
  }
return (
  
  <div style={{height:"100vh",border:"10px solid white",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url("https://images.contentful.com/1es3ne0caaid/66ebZLTcCksGswsUQGOCqG/5caf88a38b909bcc51b69c6b570dd2c0/react-vr-app-background.png")`}} >
  <div style={{display:"flex",position:"absolute",top:"23%",left:"38%",backgroundColor:"white",alignItems:"center",flexDirection:"column",width:"300px",padding:"10px",}}>
      <div style={{padding:"3px",width:"100%",border:"5px solid green"}}>
        <div className="container-fluid bg-dark text-white" style={{margin:"auto",height:"40px",textAlign:"center"}}><h3>LOG-IN</h3></div>
      </div>

    <div>
    <form onSubmit={onsubmit}>
    <div class="form-group" style={{paddingTop:"20px"}}>
    <label for="exampleInputEmail1">User Id.</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your id." value={Em} 
    onChange={(e)=> setEm(e.target.value)}/>
    </div>
    <div class="form-group" style={{marginBottom:"10px"}}>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" value={Ps} 
    onChange={(e)=> setPs(e.target.value)}/>
    </div>
    <div><small id="emailHelp" class="form-text text-muted">Don't have an account.<a onClick={()=> setModalIsOpen(true)} style={{marginLeft:"8px"}} href="#signup">Sign Up</a></small></div>
    <div style={{textAlign:"center",marginTop:"20px"}}>
    <button type="submit" class="btn btn-success">Submit</button>
    
    {/* <Link to={paths}>
    </Link> */}
    </div>
    </form>
    </div>
  </div>

  <Modal isOpen={modalIsOpen}  style={{overlay:{border:"10px solid white",backgroundImage:`url("https://images.contentful.com/1es3ne0caaid/66ebZLTcCksGswsUQGOCqG/5caf88a38b909bcc51b69c6b570dd2c0/react-vr-app-background.png")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}
  ,content:{padding:"10px",top:"200px",bottom:"200px",right:"400px",left:"400px",backgroundColor:"black",borderRadius:"10px",border:"8px solid white"}}}>

        <div style={{position:"absolute",top:"20%",left:"20%",textAlign:"center"}}><button style={{width:"110px"}} className="btn btn-primary" onClick={()=> setPModalIsOpen(true)}>Player</button><button style={{marginLeft:"50px",width:"110px"}} className="btn btn-success" onClick={()=> setOModalIsOpen(true)}>Owner</button></div>
        <div style={{position:"absolute",top:"60%",left:"40%",textAlign:"center"}}><button style={{width:"90px"}} className="btn btn-danger" onClick={()=> setModalIsOpen(false)}>Back</button> </div>
  </Modal>

  <Modal isOpen={pmodalIsOpen} style={{overlay:{border:"10px solid white",backgroundImage:`url("https://images.contentful.com/1es3ne0caaid/66ebZLTcCksGswsUQGOCqG/5caf88a38b909bcc51b69c6b570dd2c0/react-vr-app-background.png")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}
  ,content:{padding:"10px",top:"100px",bottom:"100px",right:"400px",left:"400px",backgroundColor:"white",borderRadius:"10px",border:"8px solid white"}}}>

  <div>
  <div style={{padding:"3px",width:"100%",border:"5px solid green"}}>
        <div className="container-fluid bg-dark text-white" style={{margin:"auto",height:"40px",textAlign:"center"}}><h3>Player Sign-up</h3></div>
  </div>
  <form style={{color:"black"}} onSubmit={onsubmit1}>
  <div className="form-group">
    <label for="exampleInputEmail1">Player id. :</label>
    <input style={{height:"30px"}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player id." name="Pid" value={Id} 
    onChange={(e)=> setId(e.target.value)} />
    </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Player img src :</label>
    <input style={{height:"30px"}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player image source" name="Pimgsrc" value={Img} 
    onChange={(e)=> setImg(e.target.value)} />
  </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Player name :</label>
            <input style={{height:"30px"}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player name" name="Pname" value={Nm} 
            onChange={(e)=> setNm(e.target.value)}/>
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Player Info :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="D.O.B (YYYY-MM-DD)" name="Pinfo" value={Dob} 
            onChange={(e)=> setDob(e.target.value)} style={{marginTop:"5px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player age" name="Pinfo" value={Age} 
            onChange={(e)=> setAge(e.target.value)} style={{marginTop:"5px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player type" name="Pinfo" value={Type} 
            onChange={(e)=> setType(e.target.value)} style={{marginTop:"5px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player Gender" name="Pinfo" value={Gen} 
            onChange={(e)=> setGen(e.target.value)} style={{marginTop:"5px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player Base Price" name="Pinfo" value={Price} 
            onChange={(e)=> setPrice(e.target.value)} style={{marginTop:"5px",height:"30px"}}/>
        </div>


        <div class="form-group" style={{marginBottom:"10px",paddingTop:"5px"}}>
        <InputLabel style={{color:"black"}} htmlFor="standard-adornment-password">
              Enter your Password
            </InputLabel>
        <Input type={Password.showPassword ? "text" : "password"}
        onChange={handlePasswordChangep("password")}
        value={Password.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPasswordp}
              onMouseDown={handleMouseDownPasswordp}
            >
              {Password.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }/>
        </div>
  <div style={{marginTop:"20px"}}>
  <button style={{width:"80px"}} type="submit" onClick={()=> setPModalIsOpen(false)} class="btn btn-danger">Back</button>
  <button style={{marginLeft:"240px"}} type="submit" class="btn btn-success">Submit</button>
  </div>
  </form>
  </div>  

  </Modal>


  <Modal isOpen={omodalIsOpen} style={{overlay:{border:"10px solid white",backgroundImage:`url("https://images.contentful.com/1es3ne0caaid/66ebZLTcCksGswsUQGOCqG/5caf88a38b909bcc51b69c6b570dd2c0/react-vr-app-background.png")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}
  ,content:{padding:"10px",top:"100px",bottom:"100px",right:"400px",left:"400px",backgroundColor:"white",borderRadius:"10px",border:"8px solid white"}}}>

  <div>
  <div style={{padding:"3px",width:"100%",border:"5px solid green"}}>
        <div className="container-fluid bg-dark text-white" style={{margin:"auto",height:"40px",textAlign:"center"}}><h3>Owner Sign-up</h3></div>
  </div>
  <form style={{color:"black"}}onSubmit={onsubmit2}>
  <div class="form-group" style={{paddingTop:"20px"}}>
  <label for="exampleInputEmail1">Owner Id.</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your id." value={Id} 
    onChange={(e)=> setId(e.target.value)}/>
  </div>

  <div class="form-group" style={{paddingTop:"5px"}}>
  <label for="exampleInputEmail1">Image Src.</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Img src." value={Img} 
    onChange={(e)=> setImg(e.target.value)} />
  </div>

  <div class="form-group" style={{paddingTop:"5px"}}>
  <label for="exampleInputEmail1">Name.</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name" value={Nm} 
    onChange={(e)=> setNm(e.target.value)}/>
  </div>

  <div class="form-group" style={{paddingTop:"5px"}}>
  <label for="exampleInputEmail1">D.O.B:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="D.O.B (YYYY-MM-DD)" value={Dob} 
    onChange={(e)=> setDob(e.target.value)} />
  </div>

  <div class="form-group" style={{paddingTop:"5px"}}>
  <label for="exampleInputEmail1">Age</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Age" value={Age} 
    onChange={(e)=> setAge(e.target.value)}/>
  </div>

  <div class="form-group" style={{paddingTop:"5px"}}>
  <label for="exampleInputEmail1">Gender.</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Gender." value={Gen} 
    onChange={(e)=> setGen(e.target.value)}/>
  </div>


  <div class="form-group" style={{marginBottom:"10px",paddingTop:"5px"}}>
  <InputLabel style={{color:"black"}} htmlFor="standard-adornment-password">
        Enter your Password
      </InputLabel>
  <Input type={Pass1.showPassword ? "text" : "password"}
  onChange={handlePasswordChange("password")}
  value={Pass1.password}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {Pass1.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  }/>
  </div>

  <div style={{marginTop:"20px"}}>
  <button style={{width:"80px"}} type="submit" onClick={()=> setOModalIsOpen(false)} class="btn btn-danger">Back</button>
  <button style={{marginLeft:"240px"}} type="submit" class="btn btn-success">Submit</button>
  </div>
  </form>
  </div>  

  </Modal>

  </div>



);

};

export {x};

export default LoginForm;