// first letter should be captial
// inorder to get the structure  use refce
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Welcome to React!!!</h1>
      <label htmlFor="">Name:</label>
      <input type="text"placeholder='enter your name' />
      <br></br>
      <label htmlFor="">Age:</label>
      <input type="text"placeholder='Enter your age' />
      <br />
      <button>Submit</button>
      <br />
      <Typography variant='h1'>Welcome to React!!!</Typography>
      <br />
      <TextField variant="outlined" label="username" color="error"> </TextField>
      <br />
      <TextField variant="filled" label="age"color="success"></TextField>
      <br />
      <TextField variant="standard" label="place" color="secondary"></TextField>
      <br />
      {/* &nbsp; is used when there is no br then it is to obtain small space btn  */}
      <Button variant="text" color="secondary">Sumbit</Button>
      <br />
      <Button variant="contained" color="error">Submit</Button>
      <br />
      <Button variant="outlined"color="success">Submit</Button>
      
    </div>
  )
}

export default First
