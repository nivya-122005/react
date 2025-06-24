import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const DataTable = () => {
  return (
    <div>
      <Typography variant ="h3">Welcome To Table</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Place </TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Nivya</TableCell>
                    <TableCell>KTM</TableCell>
                    <TableCell>20</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
