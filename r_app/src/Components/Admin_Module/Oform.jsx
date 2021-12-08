import React, { useState } from 'react';


function Oform({onAdd}){

    const [Id,setId] = useState('');
    const [Img,setImg] = useState('');
    const [Nm,setNm] = useState('');
    const [Dob,setDob] = useState('');
    const [Age,setAge] = useState('');
    const [Gen,setGen] = useState('');
    


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!Img){
            alert('Please fill the form completely')
            return
        }

        onAdd({'owner_id': Id,'img_src': Img,'name': Nm,'dob': Dob,'age': Age,'gender': Gen})
        setId('')
        setImg('')
        setNm('')
        setDob('')
        setAge('')
        setGen('')
        
    
        var data = {}
        data = {
            'img_src': Img,
            'name': Nm,
            'dob': Dob ,
            'age': Age,
            'gender': Gen,
            'owner_id':Id
           
        }
        //alert(data)
        fetch('http://127.0.0.1:8000/api/addOwn', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          })
          .then( data => data.json())
          .then(
            data => {
                //alert("123")
                alert("Owner Added successfully!")
                window.location.reload()
            //   this.props.userLogin(data.token);
            }
          )
          .catch( error => alert(error))

    }


    return(
        <div className="form_div" style={{margin:"auto"}}>
        <form onSubmit={onSubmit}>



        <div className="form-group"style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Owner Id:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Owner Id" name="Pimgsrc" value={Id} 
            onChange={(e)=> setId(e.target.value)} />
        </div>

        <div className="form-group"style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Owner Name:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Owner Name" name="Pname" value={Nm} 
            onChange={(e)=> setNm(e.target.value)}/>
        </div>

        <div className="form-group" style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Owner Image Url :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Owner Image Url" name="Pimgsrc" value={Img} 
            onChange={(e)=> setImg(e.target.value)} />
        </div>

        <div className="form-group"style={{textAlign:"center"}} >
            <label for="exampleInputEmail1">Owner Info:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Owner D.O.B" name="Pinfo" value={Dob} 
            onChange={(e)=> setDob(e.target.value)} style={{marginTop:"10px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Owner Age" name="Pinfo" value={Age} 
            onChange={(e)=> setAge(e.target.value)} style={{marginTop:"10px"}}/>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Owner Gender" name="Pinfo" value={Gen} 
            onChange={(e)=> setGen(e.target.value)} style={{marginTop:"10px"}}/>

        </div>

        <button type="submit" className="btn btn-block" style={{backgroundColor:"green",color:"white"}} /*onClick={listOfItems}*/>Submit</button>
        </form>
        </div>
    )
}

export default Oform;