const categoriesEl = document.querySelector('#categories');
const categoriesListEl = categoriesEl.children;
const categoriesArray = Array.from(categoriesListEl);

console.log(`Number of categories: ${categoriesEl.children.length}`);


categoriesArray.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelector('ul').children.length;
    console.log(`${categoryName}: ${categoryItems}`)
})


