const allThemes = [
  { normal: "яблоко", spy: "груша" },
  { normal: "шапка", spy: "кепка" },
  { normal: "машина", spy: "мотоцикл" },
  { normal: "куртка", spy: "пальто" },
  { normal: "кроссовки", spy: "ботинки" },
  { normal: "кошка", spy: "собака" },
  { normal: "чай", spy: "кофе" },
  { normal: "морковь", spy: "свёкла" },
  { normal: "стол", spy: "стул" },
  { normal: "телевизор", spy: "радио" },
  { normal: "футбол", spy: "баскетбол" },
  { normal: "гитара", spy: "скрипка" },
  { normal: "корабль", spy: "подлодка" },
  { normal: "лес", spy: "парк" },
  { normal: "ракета", spy: "спутник" },
  { normal: "роза", spy: "тюльпан" },
  { normal: "ручка", spy: "карандаш" },
  { normal: "доска", spy: "парта" },
  { normal: "врач", spy: "медсестра" },
  { normal: "браузер", spy: "сайт" },
  { normal: "клубника", spy: "малина" },
  { normal: "воробей", spy: "синица" },
  { normal: "кухня", spy: "ванная" },
  { normal: "смартфон", spy: "планшет" },
  { normal: "актёр", spy: "режиссёр" },
  { normal: "шахматы", spy: "шашки" },
  { normal: "карп", spy: "щука" },
  { normal: "берёза", spy: "сосна" },
  { normal: "молоток", spy: "отвёртка" },
  { normal: "пицца", spy: "бургер" },
  { normal: "гудок", spy: "сирена" },
  { normal: "кастрюля", spy: "сковорода" },
  { normal: "мяч", spy: "кукла" },
  { normal: "картина", spy: "зеркало" },
  { normal: "пила", spy: "топор" },
  { normal: "снег", spy: "дождь" },
  { normal: "таблетка", spy: "укол" },
  { normal: "сандалии", spy: "туфли" },
  { normal: "речка", spy: "озеро" },
  { normal: "седан", spy: "внедорожник" },
  { normal: "гора", spy: "холм" },
  { normal: "больница", spy: "школа" },
  { normal: "борщ", spy: "суп" },
];

let availableThemes = [...allThemes];
let playerWords = [];
let currentPlayer = 0;
let totalPlayers = 3;
let hideTimeout = null;

const wordDisplay = document.getElementById("wordDisplay");
const getWordBtn = document.getElementById("getWordBtn");
const startGameBtn = document.getElementById("startGameBtn");
const playerCountInput = document.getElementById("playerCount");

function prepareRound() {
  if (availableThemes.length === 0) {
    availableThemes = [...allThemes];
  }

  const index = Math.floor(Math.random() * availableThemes.length);
  const theme = availableThemes.splice(index, 1)[0];

  const spyIndex = Math.floor(Math.random() * totalPlayers);
  playerWords = [];

  for (let i = 0; i < totalPlayers; i++) {
    playerWords.push(i === spyIndex ? theme.spy : theme.normal);
  }

  currentPlayer = 0;
  getWordBtn.disabled = false;
}

function showWord(text) {
  clearTimeout(hideTimeout);
  wordDisplay.classList.remove("show");
  void wordDisplay.offsetWidth;

  wordDisplay.textContent = text;
  wordDisplay.classList.add("show");

  hideTimeout = setTimeout(() => {
    wordDisplay.textContent = "";
    wordDisplay.classList.remove("show");
  }, 5000);
}

getWordBtn.addEventListener("click", () => {
  if (currentPlayer < playerWords.length) {
    showWord(`Ваше слово: ${playerWords[currentPlayer]}`);
    currentPlayer++;
    if (currentPlayer === playerWords.length) {
      getWordBtn.disabled = true;
    }
  }
});

startGameBtn.addEventListener("click", () => {
  const count = parseInt(playerCountInput.value);
  if (!isNaN(count) && count >= 3 && count <= 20) {
    totalPlayers = count;
    prepareRound();
    showWord("Раздаю слова...");
  } else {
    alert("Введите корректное количество игроков (3-20)");
  }
});