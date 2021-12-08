import { React,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect,Link } from 'react-router-dom';

const LoginForm = () => {
    const[isAuth,setisAuth] = useState(true);
    if(!isAuth){
        return <Redirect to="/Admin" />
    }
return (
<div style={{backgroundColor:"gray",padding:"5px"}}>
<div style={{display:"flex",justifyContent:"center",borderRadius:"5%",borderWidth:"3px",borderStyle:"solid",padding: "10px",
backgroundColor:"white",margin: "12% 33%",width:"35%"}}>
<form>
<div style={{textAlign:"center"}}><h3>Login</h3></div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={()=>setisAuth(false)} type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
);
};

export default LoginForm;