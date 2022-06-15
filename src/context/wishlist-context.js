import { createContext , useContext , useState} from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
const WishlistContext = createContext()


const WishlistProvider = ({children}) => {
    const [wishlistItems,setWishlistItems] = useState([])
    
    return(
        <WishlistContext.Provider value={{wishlistItems,setWishlistItems}}>
            {children}
        </WishlistContext.Provider>
    )
}


const removeFromWishlistHandler = async (productId , token , setWishlistItems) => {
    try {
      const resp = await axios.delete(`/api/user/wishlist/${productId}` , {
        headers: { authorization: token}
      })
      toast.info("Item removed from wishlist")
      setWishlistItems(resp.data.wishlist)
    } catch(err) {
      console.log(err);
    }
  }

  const addToWishlistHandler = async (product , token , setWishlistItems , navigate) => {

    if(token) {
        try {
            const resp = await axios.post('/api/user/wishlist' , { product } , {
                headers: { authorization : token}
            })
            toast.success("Item added to wishlist")
            setWishlistItems(resp.data.wishlist)
        } catch(err) {
            console.log(err);
        }
    } else {
        navigate('/login')
    }
}

const useWishlist = () => useContext(WishlistContext)

export { useWishlist , WishlistProvider , removeFromWishlistHandler , addToWishlistHandler}