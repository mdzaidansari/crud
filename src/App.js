import React from 'react';
import './App.css'
import Form from './components/Form';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Read from './components/Read';
import Edit from './components/Edit';
function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route exact path='/' element={<Form/>}> </Route>
       <Route  path='read' element={<Read/>}> </Route>
       <Route  path='edit/:id' element={<Edit/>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
