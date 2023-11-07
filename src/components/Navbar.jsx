import React, { useEffect } from 'react';
import '../index.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchUser } from '../features/userDetalSlice';
import moon from '../components/moon.png';
import sun from '../components/sun.png'

function Navbar() {
    const allUsers = useSelector((state) => state.app.users)
    const [searchData, setSearchData] = useState('');
    const [theme, setTheme] = useState('dark-theme');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchUser(searchData))
    }, [searchData]);

    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme')
        }
        else {
            setTheme('dark-theme');
        }
        document.getElementById('dark-mode').src = 'sun.png';
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ fontSize: '30px' }}>Crud App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ height: '45px' }}>
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Create Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='read' className="nav-link">All Post ({allUsers.length})</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search" placeholder="Search"
                                aria-label="Search"
                                onChange={(e) => setSearchData(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">  Search  </button>
                        </form>
                        <div className="dark_mode">
                            <button onClick={toggleTheme} className='mx-4' id='dark-mode'> <img src={moon} alt="" style={{ width: '20px' }} /> </button>
                        </div>
                       
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
