import React, { useState } from 'react';
import Sdata from './Sdata';


function Form({onAdd}){

    const [Id,setId] = useState('');
    const [Img,setImg] = useState('');
    const [Nm,setNm] = useState('');
    const [Dob,setDob] = useState('');
    const [Age,setAge] = useState('');
    const [Type,setType] = useState('');
    const [Gen,setGen] = useState('');
    const [Price,setPrice] = useState('');
   


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!Id){
            alert('Please fill the form completely')
            return
        }

        onAdd({'player_id':Id,'img_src':Img,'name': Nm,'dob': Dob,'age': Age,'type': Type,'gender': Gen,'price': Price})
        setId('')
        setImg('')
        setNm('')
        setDob('')
        setAge('')
        setType('')
        setGen('')
        setPrice('')
       
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
                window.location.reload();
            //   this.props.userLogin(data.token);
            }
          )
          .catch( error => alert(error))

    }


    return(
        <div className="form_div" style={{margin:"auto"}}>
        <form onSubmit={onSubmit}>

        <div className="form-group"style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Player Id :</label>
            <input style={{height:"30px"}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player Id" name="Pid" value={Id} 
            onChange={(e)=> setId(e.target.value)} />
        </div>

        <div className="form-group"style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Player Img Url :</label>
            <input style={{height:"30px"}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player Image Url" name="Pimgsrc" value={Img} 
            onChange={(e)=> setImg(e.target.value)} />
        </div>

        <div className="form-group"style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Player Name :</label>
            <input style={{height:"30px"}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player Name" name="Pname" value={Nm} 
            onChange={(e)=> setNm(e.target.value)}/>
        </div>

        <div className="form-group" style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Player Info :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="D.O.B (YYYY-MM-DD)" name="Pinfo" value={Dob} 
            onChange={(e)=> setDob(e.target.value)} style={{marginTop:"6px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player age" name="Pinfo" value={Age} 
            onChange={(e)=> setAge(e.target.value)} style={{marginTop:"10px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player type" name="Pinfo" value={Type} 
            onChange={(e)=> setType(e.target.value)} style={{marginTop:"10px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player Gender" name="Pinfo" value={Gen} 
            onChange={(e)=> setGen(e.target.value)} style={{marginTop:"10px",height:"30px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Player Base Price" name="Pinfo" value={Price} 
            onChange={(e)=> setPrice(e.target.value)} style={{marginTop:"10px",height:"30px"}}/>
        </div>

        <button type="submit" className="btn btn-block" style={{backgroundColor:"green",color:"white"}} /*onClick={listOfItems}*/>Submit</button>
        </form>
        </div>
    )
}

export default Form;