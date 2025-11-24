let form = document.getElementById("studentForm");
let tableBody = document.getElementById("tableBody");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let email = document.getElementById("email").value;

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td><button onclick="deleteRow(event)"><i class='fa-solid fa-trash'></i> Delete</button></td>
  `;

  tableBody.appendChild(row);

  form.reset();
});

function deleteRow(event) {
  event.target.closest("tr").remove();
}
