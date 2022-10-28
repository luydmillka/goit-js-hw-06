const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsContainer = document.querySelector('#ingredients')
const ingridientsEl = ingredients.map(ingredient => {
  const ingridientEl = document.createElement('li');
  ingridientEl.textContent = ingredient;
  ingridientEl.classList.add('item');
  return ingridientEl;
});

ingridientsContainer.append(... ingridientsEl)





