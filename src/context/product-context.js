import { createContext, useContext, useReducer } from "react";
import {productReducer} from "../reducer/product-reducer";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [state,dispatch] = useReducer(productReducer , {products: [] , sortByPrice: "" , sortByRating: "" , sortByCategory: {mobile: false , laptop: false} , priceRange: 50000 })

    return(
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider , useProduct}