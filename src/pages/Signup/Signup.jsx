import React from 'react'
import { Nav } from '../../components/index'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
  return (
    <div className="container-login">
    <Nav />

    <section className="login-container">
        <div className="card card-login">
            <h2>Signup</h2>
            <label htmlFor="inp">First Name:</label>
            <input type="text" placeholder="enter input here" required />

            <label htmlFor="inp">Last Name:</label>
            <input type="text" placeholder="enter input here" required />

            <label htmlFor="inp">Email:</label>
            <input type="email" placeholder="enter input here" required />

            <label htmlFor="inp">Password:</label>
            <input type="password" placeholder="enter password" required />

            <label htmlFor="inp">Confirm Password:</label>
            <input type="password" placeholder="enter password" required />
            <div className="reset-container">
                <div>
                    <input type="checkbox" /><label>Accept all T&C</label></div>
            </div>
            <button className="btn btn-primary-solid signup-btn">Signup</button>
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