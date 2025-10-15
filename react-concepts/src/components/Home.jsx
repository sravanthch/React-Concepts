import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home-header'>
            <h3>Welcome to Home Page</h3>
            <button onClick={()=>navigate('/counter')}>Counter</button>
        </div>
    )
}

export default Home
