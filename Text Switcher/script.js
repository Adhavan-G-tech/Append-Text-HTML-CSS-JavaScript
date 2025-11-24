let h1 = document.getElementById("result");

function update(event) {
  h1.textContent = event.target.textContent;

  
  h1.style.transform = "scale(1.2)";
  h1.style.color = "#38bdf8";
  setTimeout(() => {
    h1.style.transform = "scale(1)";
  }, 200);
}
