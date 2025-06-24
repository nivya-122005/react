import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    var name="Nivya";
    //useState
    var [fname,setFname]=useState("Nivya");
    const change =()=>{
        setFname("Luke")
    }
  return (
    <div>
      <Typography variant="h3">Welcome {fname}</Typography>
      <Button variant="contained"onClick={()=>{setFname("Kessiya")}}> Change</Button> 
      <br></br>
      <br></br>
      <Button variant="contained"onClick={change}>NewChange</Button>
    </div>
  )
}

export default StateBasic
