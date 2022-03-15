import React from 'react'
import { Link } from 'react-router-dom'

import './form.css';

function LogIn() {
    return (
        <div className="text-center box">
            <h1>Welcome back!</h1>
            <form action="/home">
                <p>
                    <label>Email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
            </form>
           
        </div>
    )
}

export default LogIn;