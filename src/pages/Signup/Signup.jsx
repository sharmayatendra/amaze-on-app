import React, { useState } from 'react'
import { Nav } from '../../components/index'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import './Signup.css'
import { useAuth } from '../../context'

function Signup() {
    const {dispatch} = useAuth()
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const signupHandler = async() => {
        if(firstName !== "" && lastName !== "" && email !== "") {
            try{
                const resp = await axios.post("/api/auth/signup" , {
                    email , password , firstName , lastName
                })
                localStorage.setItem('token' , resp.data.encodedToken)
                localStorage.setItem('user' , JSON.stringify(resp.data.createdUser))
                dispatch({type: "TOKEN-ADD" , payload: {token: resp.data.encodedToken, user:resp.data.createdUser}})
                navigate("/")
            }catch(err) {
                console.log(err);
            }
        }
    }

  return (
    <div className="container-login">
    <Nav />

    <section className="login-container">
        <div className="card card-login">
            <h2>Signup</h2>
            <label htmlFor="inp">First Name:</label>
            <input type="text" placeholder="enter input here" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

            <label htmlFor="inp">Last Name:</label>
            <input type="text" placeholder="enter input here" required value={lastName} onChange={(e) => setLastName(e.target.value)}/>

            <label htmlFor="inp">Email:</label>
            <input type="email" placeholder="enter input here" required value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="inp">Password:</label>
            <input type="password" placeholder="enter password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="inp">Confirm Password:</label>
            <input type="password" placeholder="enter password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <div className="reset-container">
                <div>
                    <input type="checkbox" /><label>Accept all T&C</label></div>
            </div>
            {password !== confirmPassword && <p className='danger-text'>Password not matching</p>}
            <button className="btn btn-primary-solid signup-btn" onClick={signupHandler}>Signup</button>
            <div className="create-account-container">
                <Link to="/login">Already have an account?</Link>
                <span className="material-icons-outlined right-icon">
                    chevron_right
                </span>
            </div>

        </div>
    </section>
</div>
  )
}

export { Signup }