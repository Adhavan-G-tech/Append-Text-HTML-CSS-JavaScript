const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');
const resetBtn = document.getElementById('reset-btn');

const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceDisplay.textContent = userChoice;
        computerChoiceDisplay.textContent = computerChoice;
        outcomeDisplay.textContent = result;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getResult(user, computer) {
    if (user === computer) return "😐 It's a Draw!";
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "🎉 You Win!";
    } else {
        return "💀 You Lose!";
    }
}

resetBtn.addEventListener('click', () => {
    userChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';
    outcomeDisplay.textContent = 'Let\'s Play!';
});
