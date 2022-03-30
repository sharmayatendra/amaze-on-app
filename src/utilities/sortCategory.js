const sortByCategoryFunc = (productList,sortByCategory) => {
if (Object.values(sortByCategory).every((current) => !current))
    return productList;
  return productList.filter((product) => sortByCategory[product.categoryName]);
}

export { sortByCategoryFunc }