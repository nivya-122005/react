import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import DataTable from './components/DataTable'
import DataCard from './components/DataCard'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>Nivya Shelgi</h1> */}
   {/* <First/> */}
   {/* <Reg/> */}
   {/* <DataTable/> */}
   {/* <DataCard/> */}
   {/* <StateBasic/> */}
   <Navbar/>
   <Routes>
     <Route path="/" element={<First/>}/>
    <Route path="/r" element={<Reg/>}/>
     <Route path="/t" element={<DataTable/>}/>
      <Route path="/c" element={<DataCard/>}/> 
      <Route path="/i" element={<StateBasic/>}/>
      <Route path="/s" element={<Task/>}/>
   </Routes> 
    </>
  )
}

export default App
