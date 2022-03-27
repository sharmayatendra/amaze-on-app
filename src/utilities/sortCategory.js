const sortByCategoryFunc = (productList,sortByCategory) => {
    if(sortByCategory.mobile) {
        return productList.filter(item => item.categoryName === "mobile")
    } else if(sortByCategory.laptop) {
        return productList.filter(item => item.categoryName === "laptop")
    }
    return productList
}

export { sortByCategoryFunc }