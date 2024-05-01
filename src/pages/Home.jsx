import React from 'react'
import Button from '@mui/material/Button';
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import StudentLogin from './login/StudentLogin';
import { OwnerLogin } from './login/OwnerLogin';
import { AdminLogin } from './login/AdminLogin';
import StudentSignup from './signup/StudentSignup';
import OwnerSignup from './signup/OwnerSignup';
import StudentHome from './StudentHome';


const Home = (props) => {
    const authStatus = props.authStatus
    return (
        <div>
            <Header authStatus={authStatus}/>
        </div>
    )
}

export default Home;
