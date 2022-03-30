const priceRangeFilter = (productList,priceRange) => {
    return productList.filter(item => item.discountedPrice <= priceRange)
}

export { priceRangeFilter }