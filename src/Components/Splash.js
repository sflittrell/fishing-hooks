import React from 'react'
import {Link } from 'react-router-dom';

export default function Splash() {
    return (
        <div>
            <h3>Welcome to Hook Line & Sinker</h3>
            <Link to='/products/'>Click here to see all of our products</Link>
        </div>
    )
}
