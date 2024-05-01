import React, { useEffect, useState } from 'react'
import './css/Header.css'
import { Button } from '@mui/material';

const Header = (props) => {
    const [auth,setAuth] = useState(false)
    useEffect(()=> {
        const auth_status = localStorage.getItem('auth_status')
        setAuth(auth_status)
        console.log("this is "+ props.authStatus.auth);
    })
    const logout =() => {
        localStorage.setItem('auth_status',false)
        localStorage.setItem('user',null)
    }
    return (
        <div className='header' style={{backgroundColor:""}}>
            <h1>DORMEASE</h1>
            {!auth && (
                <Button variant='contained' onClick={logout}>Logout</Button>
            )}
        </div>
        
    )
}

export default Header;
