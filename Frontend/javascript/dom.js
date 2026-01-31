console.log("DOM Manipulation");
console.log(document);

/* ---------- Heading ---------- */
const heading1 = document.createElement("h1");
heading1.textContent = "Welcome to JavaScript";
// console.log(heading1)
document.body.append(heading1);

/* ---------- Image ---------- */
const img = document.createElement("img");
img.src = "https://picsum.photos/300"; // valid image
img.alt = "Nature Image";
img.style.display = "block";
img.style.marginBottom = "10px";

/* ---------- Message element (single) ---------- */
const message = document.createElement("p");
message.style.fontWeight = "bold";

/* ---------- Image load success ---------- */
img.addEventListener("load", () => {
  message.textContent = "Image loaded successfully: " + img.alt;
  message.style.color = "green";

  if (!message.isConnected) {
    document.body.append(message);
  }
});

/* ---------- Image load failure ---------- */
img.addEventListener("error", () => {
  message.textContent = "Image failed to load: " + img.alt;
  message.style.color = "red";

  if (!message.isConnected) {
    document.body.append(message);
  }
});

/* ---------- Append image ---------- */
document.body.append(img);

/* ---------- Section ---------- */
// const section = document.createElement("div");
// section.className = "section";

// const heading2 = document.createElement("h1");
// heading2.textContent = "This is heading tag";

// section.append(heading2);
// document.body.append(section);
