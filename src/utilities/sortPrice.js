const sortByPriceFunc = (productList,sortByPrice) => {
    switch(sortByPrice) {
        case "Low-To-High":
            return [...productList].sort((item1,item2) => item1.discountedPrice - item2.discountedPrice);
        case "High-To-Low":
            return [...productList].sort((item1,item2) => item2.discountedPrice - item1.discountedPrice);
        case "RELEVANCE":
            return [...productList]
        default:
            return productList
    }
}

export { sortByPriceFunc } 