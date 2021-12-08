import React, { useState } from 'react';

function Nform({onAdd}){

    const [imgsrc,setimgsrc] = useState('');
    const [sname,setsname] = useState('');
    const [info,setinfo] = useState('');
    const [link,setlink] = useState('');


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!imgsrc){
            alert('Please fill the form completely')
            return
        }

        onAdd({'img_src':imgsrc,'headline': sname,'short_info':info,'link': link})
        setimgsrc('')
        setsname('')
        setinfo('')
        setlink('')
        var data = {}
        data = {
            'img_src': imgsrc,
            'headline': sname,
            'short_info': info ,
            'link': link
        }
        fetch('http://127.0.0.1:8000/api/addNews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          })
          .then( data => data.json())
          .then(
            data => {
                alert(data.message)
                window.location.reload()
            //   this.props.userLogin(data.token);
            }
          )
          .catch( error => alert(error))

    }

    return(
        <div className="form_div">
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label for="exampleInputEmail1">Headlines:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Headlines"  value={sname} 
            onChange={(e)=> setsname(e.target.value)} />

        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">Headline Image Url :</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Image Url" value={imgsrc} 
            onChange={(e)=> setimgsrc(e.target.value)} />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">News:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter News" value={info} 
            onChange={(e)=> setinfo(e.target.value)} />
        </div>

        <div className="form-group">
            <label for="exampleInputEmail1">News link:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter News link" value={link} 
            onChange={(e)=> setlink(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-block" style={{backgroundColor:"green",color:"white"}}>Submit</button>
        </form>
        </div>
    )
}

export default Nform;