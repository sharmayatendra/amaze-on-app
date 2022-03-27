const sortByRatingFunc = (productList,sortByRating) => {
    // console.log(productList,sortByRating);
    switch(sortByRating) {
        case "Four-and-Above":
            return productList.filter((item) => item.rating >= 4)
        case "Three-and-Above":
            return productList.filter((item) => item.rating >= 3)
        case "Two-and-Above":
            return productList.filter((item) => item.rating >= 2)
        case "One-and-Above":
            return productList.filter((item) => item.rating >= 1)
        default:
            return productList
    }
}

export { sortByRatingFunc }