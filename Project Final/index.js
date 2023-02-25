// Getting Elements
let setButton = document.getElementById("setButton");
let removeButton = document.getElementById("removeButton");
let todoList = document.getElementById("todoList");
let inputTitle = document.getElementById("inputTitle");
let inputDescription = document.getElementById("inputDescription");

// Addint Functionality
function changeDivHTML() {
  card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h5 class="card-title">${inputTitle.value}</h5>
  <p class="card-description">${inputDescription.value}</p>`;
  todoList.appendChild(card);

  // Optional: Remove the card when clicked
  // card.addEventListener("click", (e) => {
  //   if (e.target.classList.contains("card")) {
  //     e.target.remove();
  //   }
  // });
}

setButton.addEventListener("click", changeDivHTML);

function removeCards() {
  todoList.innerHTML = "";
}

removeButton.addEventListener("click", removeCards);
