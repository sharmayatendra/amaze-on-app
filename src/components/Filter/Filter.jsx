import React from 'react'
import { useProduct } from '../../context/product-context'
import "./Filter.css"
function Filter() {
    
    const {state:{sortByPrice , sortByRating , sortByCategory:{mobile,laptop} , priceRange} ,dispatch} = useProduct()
    
  return (
    <nav className="sidebar-nav">
            <div className="sidebar-container flex space-between align-center">
                <h3 className="sidebar-heading">Filters</h3>
                <span className="sidebar-clear-text clear-all" onClick={() => dispatch({type: "CLEAR"})}>Clear</span>
            </div>
            <div className="sidebar-container">
                <h3 className="sidebar-heading">Price</h3>
                <p className="flex space-between align-center"><span className="range-min">5000</span><span className="range-max">{priceRange}</span></p>
                <input type="range" className="input" min={5000} max={50000} value = {priceRange} step={5000} onChange={(event) => dispatch({type: "PRICE", payload: event.target.value})}/>
                
            </div>
            <div className="sidebar-container">
                <h3 className="sidebar-heading">Categories</h3>
                <div className="list-container">    
                    <ul className="list">
                        <li className="list-item"><label htmlFor="mobile"><input type="checkbox" id="mobile" className="check-input" checked={mobile} onChange={() => dispatch({type: "MOBILE" })}/>Mobile</label></li>
                        <li className="list-item"><label htmlFor="laptop"><input type="checkbox" id="laptop" className="check-input" checked={laptop}
                        onChange={() => dispatch({type: "LAPTOP"})}/>Laptop</label></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-container">
                <h3 className="sidebar-heading">Ratings</h3>
                <div className="list-container">
                    <ul className="list">
                        <li className="list-item"><label htmlFor="rating-4"><input type="radio" id="rating-4" className="radio-input" name="rating" checked={sortByRating === "Four-and-Above"} onChange={() => dispatch({type: "SORT-RATING" , payload: "Four-and-Above"})}/>4 stars & above</label></li>
                        <li className="list-item"><label htmlFor="rating-3"><input type="radio" id="rating-3" className="radio-input" name="rating" checked={sortByRating === "Three-and-Above"} onChange={() => dispatch({type: "SORT-RATING" ,payload: "Three-and-Above"})}/>3 stars & above</label></li>
                        <li className="list-item"><label htmlFor="rating-2"><input type="radio" id="rating-2" className="radio-input" name="rating" checked={sortByRating === "Two-and-Above"} onChange={() => dispatch({type: "SORT-RATING" , payload: "Two-and-Above"})}/>2 stars & above</label></li>
                        <li className="list-item"><label htmlFor="rating-1"><input type="radio" id="rating-1" className="radio-input" name="rating" checked={sortByRating === "One-and-Above"} onChange={() => dispatch({type: "SORT-RATING" , payload: "One-and-Above"})}/>1 star & above</label></li>
                    </ul>
                </div>
            </div>

            <div className="sidebar-container">
                <h3 className="sidebar-heading">Sort By</h3>
                <div className="list-container">
                    <ul className="list">
                        <li className="list-item"><label htmlFor="LTH"><input type="radio" id="LTH" className="radio-input" name="sortby" checked={sortByPrice === "Low-To-High"} onChange={() => dispatch({type: "SORT-PRICE" , payload: "Low-To-High"})}/>Price: Low to High</label>
                        </li>
                        <li className="list-item"><label htmlFor="HTL"><input type="radio" id="HTL" className="radio-input" name="sortby" checked={sortByPrice === "High-To-Low"} onChange={() => dispatch({type: "SORT-PRICE" , payload: "High-To-Low"})}/>Price: High to Low</label>
                        </li>
                        <li className="list-item"><label htmlFor="REL"><input type="radio" id="REL" className="radio-input" name="sortby" checked={sortByPrice === "RELEVANCE"} onChange={() => dispatch({type: "SORT-PRICE" , payload: "RELEVANCE"})}/>Relevance</label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export { Filter } 