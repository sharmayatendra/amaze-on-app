import React, { useEffect } from 'react'
import axios from 'axios'
import './ProductListing.css'
import { ProductCard , Nav , Filter } from '../../components/index'
import { useProduct } from '../../context/product-context'
import { sortByPriceFunc , sortByRatingFunc , sortByCategoryFunc , priceRangeFilter } from '../../utilities/index'

function ProductListing() {
    const {state:{products, sortByPrice,sortByRating,sortByCategory,priceRange},dispatch} = useProduct()

    useEffect(() => {
        (async function fetchProducts() {
            try {
                const {data} = await axios.get("/api/products")
                dispatch({type: "LOAD-PRODUCTS", payload: data.products})
            } catch(error) {
                alert("error from server" , error)
            } 
        })()
    },[])

    let sortedProducts = products
    sortedProducts = sortByPriceFunc(products,sortByPrice)
    let sortByRatingProducts = sortByRatingFunc(sortedProducts,sortByRating)
    let sortByCategoryProducts = sortByCategoryFunc(sortByRatingProducts,sortByCategory)
    let filteredPriceProducts = priceRangeFilter(sortByCategoryProducts,priceRange)

  return (
    <div className='container-product'> 
    <Nav />
    <Filter />
    <section className="main-section">
        <h2>Showing all products</h2>
        <div className="main-card-section">
    {filteredPriceProducts.map(item => <ProductCard product={item} key={item._id}/>)}
    </div>
    </section>
    </div>
  )
}

export { ProductListing }