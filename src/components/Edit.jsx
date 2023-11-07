import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/userDetalSlice';
import { useNavigate, useParams } from 'react-router';

function Edit() {
  const { id } = useParams();
  const [edit, setEdit] = useState();
 const navigate= useNavigate()
 const dispatch= useDispatch()
  // console.log(id);
  const allUsers = useSelector((state) => state.app.users);
  // console.log(allUsers);

  useEffect(() => {
    if (id) {
      const singleUer = allUsers.filter((ele) => ele.id === id);
      setEdit(singleUer[0])

    }
  }, []);
  //console.log('singl user', edit);
  const newData = (e) => {
    setEdit({...edit,[e.target.name] : e.target.value});
  }
  console.log(edit);

const handleSubmit=(e)=>{
e.preventDefault();
dispatch(updateUser(edit))
navigate('/read')
}


  return (
    <div>
      <form className='w-50 mx-auto mt-5'
      onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            name='name'
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={edit && edit.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            name='email'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={edit && edit.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            name='age'
            className="form-control"
            id="age"
            aria-describedby="emailHelp"
            value={edit && edit.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input
            type="text"
            name='gender'
            className="form-control"
            id="gender"
            value={edit && edit.gender}
            onChange={newData}
          />
        </div>
        <button type="submit" className="btn btn-primary w-50 " style={{ margin: 'auto' }}>Submit</button>
      </form>
    </div>
  );
}

export default Edit;
