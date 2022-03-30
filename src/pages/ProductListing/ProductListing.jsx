import React, { useEffect } from 'react'
import axios from 'axios'
import './ProductListing.css'
import { ProductCard , Nav , Filter } from '../../components/index'
import { useProduct , useCart , useAuth } from '../../context/index'
import { sortByPriceFunc , sortByRatingFunc , sortByCategoryFunc , priceRangeFilter } from '../../utilities/index'
import { useNavigate } from 'react-router-dom'

function ProductListing() {
    const {state:{products, sortByPrice,sortByRating,sortByCategory,priceRange},dispatch} = useProduct()

    const navigate = useNavigate()
    const {setCartItems} = useCart()
    const {state:{token}} = useAuth()
    useEffect(() => {
        (async function fetchProducts() {
            try {
                const {data} = await axios.get("/api/products")
                dispatch({type: "LOAD-PRODUCTS", payload: data.products})
            } catch(error) {
                alert("error from server" , error)
            } 
        })()
    },[dispatch])

    let sortedProducts = products
    sortedProducts = sortByPriceFunc(products,sortByPrice)
    let sortByRatingProducts = sortByRatingFunc(sortedProducts,sortByRating)
    let sortByCategoryProducts = sortByCategoryFunc(sortByRatingProducts,sortByCategory)
    let filteredPriceProducts = priceRangeFilter(sortByCategoryProducts,priceRange)

        
    const addToCartHandler = async (product) => {

        if(token) {
            try {
            const resp = await axios.post("/api/user/cart" , {
                product
            }, {
                headers : {
                    authorization: token
                }
            })
            setCartItems(resp.data.cart)
        } catch(err) {
            console.log(err);
        }
        } else {
            navigate('/login')
        }
        
    }

  return (
    <div className='container-product'> 
    <Nav />
    <Filter />
    <section className="main-section">
        <h2>Showing all products</h2>
        <div className="main-card-section">
    {filteredPriceProducts.map(item => <ProductCard product={item} key={item._id} addToCart={() => addToCartHandler(item)}/>)}
    </div>
    </section>
    </div>
  )
}

export { ProductListing }