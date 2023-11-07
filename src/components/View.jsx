import React from 'react';
import { useSelector } from 'react-redux';
import './view.css'
function View({id,ShowView,setShowView}) {
    const allUsers=useSelector((state)=>state.app.users);
    // console.log(allUsers);
    const singleUer = allUsers.filter((ele) => ele.id === id);
    // console.log('single user',singleUer);
    // console.log(id);
  return (
    <div className='view-background'>
        <div className='view-container'>
            <button className='cls-btn' 
            onClick={()=>{setShowView(false)}}
            >Close</button>
        <h1 style={{marginTop:'20px'}}>{singleUer[0].name}</h1>
        <h2>{singleUer[0].email}</h2>
        <h3>{singleUer[0].gender}</h3>
        <h1>{singleUer[0].age}</h1>
        </div>
    </div>
  );
}

export default View;
