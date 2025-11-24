let input = document.getElementById("input");
let list = document.getElementById("list-container");

function add() {
  if (input.value === "") {
    alert("Please enter a task!");
    return;
  }

  // create li
  let li = document.createElement("li");
  li.innerHTML = input.value + " <button class='delete-btn' onclick='deleteItem(event)'>Delete</button>";

  list.appendChild(li);
  input.value = ""; // clear box
}

function deleteItem(event) {
  event.target.parentElement.remove();
}
