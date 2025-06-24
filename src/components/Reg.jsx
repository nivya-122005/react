



import { TextField,Button } from '@mui/material'
import React from 'react'
// import '../App.css' ---we should import
const Reg = () => {
  return (
    // classname="box"
    <div>
      <TextField variant="outlined" label="name" > </TextField>
      <br />
      <TextField variant="outlined" label="place" > </TextField>
      <br />
      <TextField variant="outlined" label="age" > </TextField>
      <br />
      <TextField variant="outlined" label="username" > </TextField>
      <br />
      <TextField variant="outlined" label="password" > </TextField>
      <br />
      <Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Reg
