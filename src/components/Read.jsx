import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { deleteUser, showUser } from '../features/userDetalSlice';
import View from './View';
import { Link } from 'react-router-dom';
function Read() {
    const dispatch = useDispatch()
    const [ShowView, setShowView] = useState(false);
    const [id, setId] = useState();
    const [radioData, setRadioData] = useState('');
    const { users, loading, searchUser } = useSelector((state) => state.app)
    console.log(searchUser);
    useEffect(() => {
        dispatch(showUser())
    }, []);

    console.log(radioData);

    if (loading==='true') {
        return (<h3>Loading</h3>)
    }
    return (
        <div>
            <div className='mt-5' style={{alignItems:'center',textAlign:'center'}}>

                All <input
                    type='radio'
                    name='gender'
                    value='all'
                    checked={radioData===''}
                    onChange={(e)=> setRadioData('')}
                />
               <span className='ms-3'>Male </span> <input
                type='radio' 
                name='gender' 
                value='male' 
                checked={radioData==='male'}
                onChange={(e)=>setRadioData(e.target.value)}
                />
                <span className='ms-3'>Female </span><input 
                type='radio' 
                name='gender'
                 value='female' 
                 checked={radioData==='female'}
                 onChange={(e)=>setRadioData(e.target.value)}
                 />

            </div>
            {ShowView && <View
                id={id}
                ShowView={ShowView}
                setShowView={setShowView}
            />}

            {users &&

                users
                    .filter((ele) => {
                        if (searchUser.length === 0) {
                            return ele;
                        }
                        else {
                            return ele.name.toLowerCase().includes(searchUser.toLowerCase())
                        }
                    })
                    .filter((ele)=>{
                        if(radioData==='male'){
                            return ele.gender===radioData;
                        }
                        else if(radioData==='female'){
                            return ele.gender===radioData;
                        }
                        else{
                            return ele;
                        }
                    })
                    .map((ele) => (
                        <div className="card mx-auto mt-5 w-50" style={{ width: "18rem" }} key={ele.id}>
                            <div className="card-body ">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                                {/* <h6 className="card-subtitle mb-2 text-body-secondary">{ele.age}</h6> */}
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.gender}</h6>
                                <button type="button" className="btn btn-info" onClick={() => [setId(ele.id), setShowView(true)]}>View</button>
                                <Link to={`/edit/${ele.id}`} type="button" className="btn btn-warning mx-5">Edit</Link>
                                <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteUser(ele.id))} >Delete</button>
                            </div>
                        </div>
                    ))

            }
        </div>
    );
}

export default Read;
