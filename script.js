const allThemes = [
{ normal: "кровать", spy: "раскладушка" },
{ normal: "грузовик", spy: "фургон" },
{ normal: "паста", spy: "лапша" },
{ normal: "программист", spy: "тестировщик" },
{ normal: "огурец", spy: "кабачок" },
{ normal: "орёл", spy: "сокол" },
{ normal: "перчатки", spy: "варежки" },
{ normal: "пылесос", spy: "робот-пылесос" },
{ normal: "курица", spy: "утка" },
{ normal: "чай", spy: "матча" },
{ normal: "шкаф", spy: "комод" },
{ normal: "принтер", spy: "сканер" },
{ normal: "самолёт", spy: "вертолёт" },
{ normal: "лягушка", spy: "жаба" },
{ normal: "телевизор", spy: "монитор" },
{ normal: "виноград", spy: "черешня" },
{ normal: "такси", spy: "каршеринг" },
{ normal: "котлета", spy: "наггетс" },
{ normal: "трактор", spy: "комбайн" },
{ normal: "браузер", spy: "сайт" },
{ normal: "пауэрбанк", spy: "зарядка" },
{ normal: "механик", spy: "автослесарь" },
{ normal: "торт", spy: "пирог" },
{ normal: "воробей", spy: "синица" },
{ normal: "юбка", spy: "платье" },
{ normal: "дельфин", spy: "тюлень" },
{ normal: "велосипед", spy: "самокат" },
{ normal: "доска", spy: "парта" },
{ normal: "куртка", spy: "пальто" },
{ normal: "торшер", spy: "люстра" },
{ normal: "печенье", spy: "кекс" },
{ normal: "шарф", spy: "платок" },
{ normal: "печь", spy: "микроволновка" },
{ normal: "рис", spy: "гречка" },
{ normal: "фен", spy: "плойка" },
{ normal: "чайник", spy: "термопот" },
{ normal: "обезьяна", spy: "шимпанзе" },
{ normal: "блины", spy: "оладьи" },
{ normal: "воспитатель", spy: "няня" },
{ normal: "кроссовки", spy: "ботинки" },
{ normal: "майка", spy: "топ" },
{ normal: "лошадь", spy: "осёл" },
{ normal: "преподаватель", spy: "учитель" },
{ normal: "ковёр", spy: "плед" },
{ normal: "скутер", spy: "мопед" },
{ normal: "яблоко", spy: "груша" },
{ normal: "бургер", spy: "сэндвич" },
{ normal: "смартфон", spy: "телефон" },
{ normal: "пицца", spy: "бургер" },
{ normal: "врач", spy: "хирург" },
{ normal: "тюльпан", spy: "роза" },
{ normal: "морковь", spy: "свёкла" },
{ normal: "наушники", spy: "колонка" },
{ normal: "сахар", spy: "мёд" },
{ normal: "дизайнер", spy: "художник" },
{ normal: "люстра", spy: "торшер" },
{ normal: "лампа", spy: "торшер" },
{ normal: "бетон", spy: "цемент" },
{ normal: "худи", spy: "толстовка" },
{ normal: "тестировщик", spy: "аналитик" },
{ normal: "молоко", spy: "сливки" },
{ normal: "печь", spy: "духовка" },
{ normal: "ёж", spy: "хомяк" },
{ normal: "банан", spy: "манго" },
{ normal: "берёза", spy: "сосна" },
{ normal: "сканер", spy: "копир" },
{ normal: "спутник", spy: "ракета" },
{ normal: "пальто", spy: "куртка" },
{ normal: "шорты", spy: "бермуды" },
{ normal: "ворота", spy: "калитка" },
{ normal: "солдат", spy: "охранник" },
{ normal: "вентилятор", spy: "кондиционер" },
{ normal: "монитор", spy: "экран" },
{ normal: "зарядка", spy: "адаптер" },
{ normal: "планшет", spy: "ноутбук" },
{ normal: "художник", spy: "иллюстратор" },
{ normal: "архитектор", spy: "инженер" },
{ normal: "баскетбол", spy: "волейбол" },
{ normal: "часы", spy: "будильник" },
{ normal: "акула", spy: "дельфин" },
{ normal: "лестница", spy: "эскалатор" },
{ normal: "топор", spy: "молоток" },
{ normal: "карандаш", spy: "ручка" },
{ normal: "печка", spy: "камина" },
{ normal: "шкаф", spy: "серванта" },
{ normal: "раковина", spy: "умывальник" },
{ normal: "ручка", spy: "карандаш" },
{ normal: "пиджак", spy: "жилет" },
{ normal: "вилка", spy: "ложка" },
{ normal: "тарелка", spy: "миска" },
{ normal: "ключ", spy: "замок" },
{ normal: "мост", spy: "тоннель" },
{ normal: "замок", spy: "дворец" },
{ normal: "вода", spy: "сок" },
{ normal: "радио", spy: "телевизор" },
{ normal: "шампунь", spy: "гель для душа" },
{ normal: "расчёска", spy: "щётка" },
{ normal: "зубная щётка", spy: "щётка" },
{ normal: "щётка", spy: "губка" },
{ normal: "куртка", spy: "ветровка" },
{ normal: "ботинки", spy: "сапоги" },
{ normal: "пальто", spy: "тренч" },
{ normal: "тапочки", spy: "сланцы" },
{ normal: "чай", spy: "латте" },
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
  }, 2500);
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