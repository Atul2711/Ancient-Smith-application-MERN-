import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './form.css'

function SignUp() {
    const [username,setUsername]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit=async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res=await axios.post("/api/auth/register",{
                username,email,password
            });
            res.data && window.location.replace('/login');
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className="text-center box">
            <h1>Join us</h1>
            <h5 id="heading">Create your personal account</h5>
            <form  onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required 
                        onChange={function(e){
                            setUsername(e.target.value)
                        }}
                    />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required 
                        onChange={function(e){
                            setEmail(e.target.value)
                        }}
                    />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required
                        onChange={
                            function(e){
                                setPassword(e.target.value)
                            }
                        }       
                    />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p><Link to="/login">Already have account ?</Link></p>

                {error && <span style={{
                    color:"red",
                    marginTop:"10px"
                }}>Something went wrong !</span>}
            </form>
            
        </div>
    )

}

export default SignUp;
