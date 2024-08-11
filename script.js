
function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

console.log(getRandomInt(1, 100));

function GenerateRandomNumber() {
    const randomNumber = getRandomInt(1,100);
    document.getElementById('randomNumberDisplay').textContent = `Random Number: ${randomNumber}`;
}

document.getElementById('generateButton').addEventListener('click', GenerateRandomNumber);
