import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]= useState(0)
  return (
    <div style={{marginTop:"200PX"}}>
      <Typography variant='h2'>Count:{count}</Typography>
       
 <Button variant='contained' color='secondary' onClick={()=>{setCount(++count)}}>+</Button>
<Button variant="contained"  color="error" onClick={()=>{setCount(--count)}}>-</Button>
           
    </div>
  )
}

export default Counter
