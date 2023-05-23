const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.dir(` ${items.length} `);

items.forEach((item) => {
  const titleElement = item.querySelector("h2");
  const elementsInCategory = item.querySelectorAll("li");
  console.dir(` ${titleElement.textContent}`);
  console.dir(`${elementsInCategory.length}`);
});
