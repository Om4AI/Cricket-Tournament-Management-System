import React from 'react'



export default function Modala({tnm,ttype,sdate,edate}) {

    return (
            <div className="container-fluid bg-light text-dark" style={{textAlign:"center",borderRadius:"1%"}}>
            <h3>{tnm}</h3>
            <div><b>Tournament Type:</b> {ttype}</div>
            <div><b>Start Date:</b> {sdate}</div>
            <div><b>End Date:</b> {edate}</div>
            </div>
    )
}
