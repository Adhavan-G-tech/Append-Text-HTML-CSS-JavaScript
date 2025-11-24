  let score = 10; // Starting score

  function btn() {
    const user = parseInt(document.getElementById("num").value);
    const random = Math.floor(Math.random() * 5) + 1;
    const result = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");

    // if game already over, stop running
    if (score <= 0) {
      result.textContent = "Game Over! Please refresh to play again.";
      result.style.color = "red";
      return; // stop function here
    }

    if (user === random) {
      result.textContent = "You are Right!";
      result.style.color = "green";
      score++;
    } else {
      result.textContent = `Wrong! It was ${random}`;
      result.style.color = "red";
      score--;
    }

    // prevent score from going negative
    if (score <= 0) {
      score = 0;
      result.textContent = "Game Over!";
      result.style.color = "red";
      alert("Game Over! Please refresh to start again.");
    }

    // update score text
    scoreDisplay.textContent = "Score: " + score;
  }

