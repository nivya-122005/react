import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataTable = () => {
  var[user,setUsers]=useState([])
  /* [] to expert a array of data*/
  // useEffect(()=>{})
    useEffect(()=>{
      //axios.get("url").then((res)=>{}).catch((err)=>{})
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{console.log(res);
          setUsers(res.data)
        })

        .catch((err)=>{console.log(err);})
      //get -to request--then to get url put call back fun response--catch to error 

    })
  /*[]-should put useeffect is used to print immediately*/
  return (
    <div>
      <Typography variant ="h3">Welcome To Table</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username </TableCell>
                    <TableCell>Email </TableCell>
                    <TableCell>City</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
             {/* map-fun for mapping{} call back fun-contain 2 parametre, return fun needed */}
             {user.map((val,i)=>{
              return(
                <TableRow key={i} >
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.address.city}</TableCell>
                  

                </TableRow>
              )
             })}

                {/* <TableRow>
                    <TableCell>Nivya</TableCell>
                    <TableCell>KTM</TableCell>
                    <TableCell>20</TableCell>
                </TableRow> */}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
