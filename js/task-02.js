const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  fragment.appendChild(item);
});

list.appendChild(fragment);