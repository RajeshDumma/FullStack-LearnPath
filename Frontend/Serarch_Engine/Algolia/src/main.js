import { algoliasearch } from "algoliasearch";

// create client
const client = algoliasearch(
  "VU7VTOT67A",
  "e575a77d977605ba16f7550651d88d5a"
);

// 🔍 search
document.querySelector("#inputSearch").addEventListener("keyup", async (e) => {
  const query = e.target.value.trim();

  if (!query) return;

  try {
    const response = await client.search({
      requests: [
        {
          indexName: "searc",
          query: query,
        },
      ],
    });

    const hits = response.results[0].hits;
    renderProducts(hits);

  } catch (err) {
    console.error(err);
  }
});


// 🧾 Render all products
function renderProducts(products) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<h3>No products found</h3>";
    return;
  }

  products.forEach(product => {
    renderSingleProduct(product);
  });
}


// 🧱 Render single product
function renderSingleProduct(product) {
  const container = document.getElementById("results");

  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  img.src = product.image || "https://via.placeholder.com/150";

  const title = document.createElement("h4");
  title.textContent = product.title || "No Title";

  const price = document.createElement("p");
  price.textContent = "₹ " + (product.price || "N/A");

  const btn = document.createElement("button");
  btn.textContent = "Purchase";

  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(price);
  div.appendChild(btn);

  container.appendChild(div);
}