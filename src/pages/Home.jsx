import React from 'react'
import Header from '../components/Header';


const Home = (props) => {
    const authStatus = props.authStatus
    return (
        <div>
            <Header authStatus={authStatus}/>
        </div>
    )
}

export default Home;
