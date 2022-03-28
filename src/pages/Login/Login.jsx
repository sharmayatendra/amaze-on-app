import React, { useState } from 'react'
import { Nav } from '../../components/index'
import axios from 'axios';
import "./Login.css"
import { useAuth } from '../../context/auth-context';
import { Link } from "react-router-dom"

function Login() {
    const { dispatch } = useAuth()
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')

     const  loginFormHandler = async () => {
        try {
            const resp = await axios.post("/api/auth/login" , {
                email: email,
                password: password
            })
            if(resp.status === 200) {
                localStorage.setItem("token" , resp.data.encodedToken)
                localStorage.setItem("user" , JSON.stringify(resp.data.foundUser))
                dispatch({type: "TOKEN-ADD" , payload: {token: resp.data.encodedToken , user: resp.data.foundUser}})
            }
        }
        catch(err) {
            console.log(err);
        }
    }

  return (
      
    <div className="container-login">
        <Nav />

        <section className="login-container">
            <div className="card card-login">
                <h2>Login</h2>
                <label htmlFor="inp">Username / Email:</label>
                <input type="email" placeholder="enter input here" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="inp">Password:</label>
                <input type="password" placeholder="enter password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="reset-container">
                    <div>
                        <input type="checkbox" /><label>Remember me</label></div>
                    <Link to="#">Forget password?</Link>
                </div>
                <button className="btn btn-primary-solid login-btn" onClick={loginFormHandler}>Login</button>
                <div className="create-account-container">
                    <Link to="#">Create an account</Link>
                    <span className="material-icons-outlined right-icon">
                        chevron_right
                    </span>
                </div>
            </div>
        </section>
    </div>
  )
}

export { Login }