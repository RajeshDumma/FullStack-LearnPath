const user_card = {
  userName: "Rajesh",
  role: "Technical Trainer",
  active: true
};

const mainDiv = document.createElement("div");
mainDiv.style.border = "2px solid black";
mainDiv.style.backgroundColor = "lightgray";
mainDiv.style.width = "220px";
mainDiv.style.padding = "10px";
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.alignItems = "center";
mainDiv.style.gap = "10px";

/* Name */
const heading = document.createElement("h2");
heading.textContent = user_card.userName;

/* Role */
const para = document.createElement("p");
para.textContent = user_card.role;

/* Status text */
const status = document.createElement("p");

/* Button */
const btn = document.createElement("button");
btn.style.color = "white";

/* Function to update UI */
function updateUI() {
  if (user_card.active) {
    status.textContent = "Active";
    status.style.color = "green";
    btn.textContent = "Deactivate";
    btn.style.backgroundColor = "green";
  } else {
    status.textContent = "Inactive";
    status.style.color = "red";
    btn.textContent = "Activate";
    btn.style.backgroundColor = "red";
  }
}

/* Toggle logic */
btn.addEventListener("click", () => {
  user_card.active = !user_card.active;
  updateUI();
});

/* Initial render */
updateUI();

mainDiv.append(heading, para, status, btn);
document.body.append(mainDiv);
