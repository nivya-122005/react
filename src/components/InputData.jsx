import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const InputData = () => {
    var[inp,setInp] =useState()
    var[data,setData]=useState()
    const inputHandler = (e)=>{
    // console.log(e)
    console.log(e.target.value)//to capture value
    setInp(e.target.value)

    }
    const  submitHandler=()=>{
        setData(inp)
    }
  return (
    <div style={{marginTop:"200PX"}}>
     {/* <Typography variant='h3'>Welcome {inp}</Typography>// to print with welcome while writing */}
      <Typography variant='h3'>Welcome {data}</Typography>{/*to print  only when click submit*/}
     
      <br></br> 
      <TextField variant="outlined" onChange={inputHandler}/>
        <br></br>
        <Button variant="contained" onClick={submitHandler}>Submit</Button>{/* only for button*/}
      
    </div>
  )
}

export default InputData
