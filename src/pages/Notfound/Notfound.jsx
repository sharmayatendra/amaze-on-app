import React from 'react'
import { Nav } from '../../components/index'
import errImg from '../../images/404img.jpg'
import { Link } from 'react-router-dom'
import "./Notfound.css"

function Notfound() {
  return (
    <div className='container-err'>
        <Nav />
        <div className='err-img-container'>
        <img src={errImg} alt="error" className='img-res'/>
        <h2 className='err-heading'>Page Not Found</h2>
        <Link to="/"><button className='btn btn-primary'>Explore</button></Link>
        </div>
    </div>
  )
}

export { Notfound }