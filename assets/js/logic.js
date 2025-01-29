console.log("logic.js is loaded.");

const dummyData = [
  {
    title: "test 1",
    price: 1.99,
    rating: 4,
  },
  {
    title: "test 2",
    price: 1.99,
    rating: 4,
  },
  {
    title: "test 3",
    price: 1.99,
    rating: 4,
  },
  {
    title: "test 4",
    price: 1.99,
    rating: 4,
  },
  {
    title: "test 5",
    price: 1.99,
    rating: 4,
  },
  {
    title: "test 6",
    price: 1.99,
    rating: 4,
  },
  {
    title: "test 7",
    price: 1.99,
    rating: 4,
  },
  {
    title: "test 8",
    price: 1.99,
    rating: 4,
  },
];

const cardContainerEl = document.getElementById("cardContainer");

for (const item of dummyData) {
  const div = document.createElement("div");
  div.setAttribute("class", "col-lg-3 col-md-6 col-sm-4");
  const cardTemplate = `
<div class="card text-bg-success mb-3">
<div class="card-header">${item.title}</div>
<div class="card-body">
<h5 class="card-title">Price: $${item.price}</h5>
<p class="card-text">Rating: ${item.rating}/10</p>
</div>
</div>
    `;
  div.innerHTML = cardTemplate;
  cardContainerEl.append(div);
}
