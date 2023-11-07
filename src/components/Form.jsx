import React from 'react';
import {useState} from 'react'
import { useStore } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createUser } from '../features/userDetalSlice';
function Form() {
   const dispatch =useDispatch();
   const navigate = useNavigate();
    const [user, setUser] = useState({});
    function getData(e){
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }
      
    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log('user..',user);
     dispatch(createUser(user));
     navigate('/read')
    }

    return (
        <div>
            <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" id="name" aria-describedby="emailHelp" onChange={getData}/>                 
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getData}/>                 
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" name='age' className="form-control" id="age" aria-describedby="emailHelp" onChange={getData}/>                 
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input type="text" name='gender' className="form-control" id="gender" onChange={getData}/>
                </div>
                <button type="submit" className="btn btn-primary w-50 " style={{margin:'auto'}}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
