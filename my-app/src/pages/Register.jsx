import React from 'react'
import { Link } from 'react-router-dom'

import './form.css'

function SignUp() {

    return (
        <div className="text-center box">
            <h1>Join us</h1>
            <h5 id="heading">Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p><Link to="/login">Already have account ?</Link></p>
            </form>
            
        </div>
    )

}

export default SignUp;
