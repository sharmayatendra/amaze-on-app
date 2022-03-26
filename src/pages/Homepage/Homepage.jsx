import React , { useState , useEffect } from 'react'
import "./Homepage.css"
import axios from "axios"
import OnePlus from "../../images/OnePlus.jpg"
import {Nav} from "../../components/Nav/Nav"
import { Link } from "react-router-dom"

function Homepage() {

const [categories,setCategories] = useState([]);

useEffect(() => {
(async function fetchCategories() {
try{
const resp = await axios.get("/api/categories")
console.log(resp);
setCategories(resp.data.categories)
}
catch(err) {
console.log(err);
}
})()
},[])
return (

<div className="container-homepage">
    <Nav />
    <section className="homepage-section">
        <h1 className="homepage-heading">Deals on top brands</h1>
        <div className='hero-img'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif"
                alt="hero-img" className='homepage-img' />
        </div>
        <Link to="/product">
        <div className="homepage-container">

            {categories.map(item => {
            return(
            <div className="card card-home">
                <div className="card-img">
                    <img src={item.img} alt="mobile" id='home-img' />
                </div>
                <div className="card-heading-wrapper text-center">
                    <h2 className="card-main-heading">{item.heading}</h2>
                    <h3 className="card-sub-heading gray-text">{item.subHeading}</h3>
                    <h1>{item.categoryName}</h1>
                </div>
            </div>
            )
            })}
        </div>
        </Link>
    </section>

    <article className="article-container">
        <div className="article-card">
            <div className="card-img article-card-img">
                <img src={OnePlus} alt="mobile" />
            </div>
            <div className="card-description">
                <h2>New Products</h2>
                <p>Checkout the exciting range of gadgets to stay updated with the technology.</p>
                <Link to="/product"><button className="btn btn-primary-solid explore-btn">Explore More</button></Link>
            </div>
        </div>
    </article>
</div>
)
}

export { Homepage }