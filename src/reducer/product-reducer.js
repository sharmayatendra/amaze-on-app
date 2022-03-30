const productReducer = (state,action) => {
    switch(action.type) {
        case "LOAD-PRODUCTS":
            return {...state , products: action.payload}
        case "SORT-PRICE":
            return {...state , sortByPrice: action.payload}
        case "SORT-RATING":
            return {...state , sortByRating: action.payload}
        case "MOBILE":
            return {...state , sortByCategory: {...state.sortByCategory , mobile: !state.sortByCategory.mobile}}
        case "LAPTOP":
            return {...state , sortByCategory: {...state.sortByCategory , laptop: !state.sortByCategory.laptop}}
        case "PRICE":
            return {...state , priceRange: action.payload}
        case "CLEAR":
            return {...state , sortByPrice: "" , sortByRating: "" , sortByCategory: {mobile: false , laptop: false} , priceRange: 50000}
        default:
            return state;
    }
}

export { productReducer }