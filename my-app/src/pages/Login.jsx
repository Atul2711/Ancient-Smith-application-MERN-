import React ,{ useContext, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../context/Context"

import './form.css';

function LogIn() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/api/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value,
          });
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE" });
        }
      };

    return (
        <div className="text-center box">
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required 
                        ref={userRef}
                    />
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" required 
                        ref={passwordRef}
                    />
                </p>
                <p>
                    <button id="sub_btn" type="submit"
                    disabled={isFetching}
                    >Login</button>
                </p>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
            </form>
           
        </div>
    )
}

export default LogIn;