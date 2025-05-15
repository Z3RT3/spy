// Тематики с обычным и шпионским словом
const allThemes = [
    { category: "Головные уборы", normal: "шапка", spy: "кепка" },
    { category: "Фрукты", normal: "яблоко", spy: "груша" },
    { category: "Транспорт", normal: "машина", spy: "мотоцикл" },
    { category: "Обувь", normal: "кроссовки", spy: "ботинки" },
    { category: "Одежда", normal: "куртка", spy: "пальто" },
    { category: "Животные", normal: "кошка", spy: "собака" },
    { category: "Напитки", normal: "чай", spy: "кофе" },
    { category: "Овощи", normal: "морковь", spy: "свёкла" },
    { category: "Мебель", normal: "стол", spy: "стул" },
    { category: "Бытовая техника", normal: "телевизор", spy: "радио" },
    { category: "Спорт", normal: "футбол", spy: "баскетбол" },
    { category: "Музыкальные инструменты", normal: "гитара", spy: "скрипка" },
    { category: "Море", normal: "корабль", spy: "подлодка" },
    { category: "Природа", normal: "лес", spy: "парк" },
    { category: "Космос", normal: "ракета", spy: "спутник" },
    { category: "Цветы", normal: "роза", spy: "тюльпан" },
    { category: "Канцелярия", normal: "ручка", spy: "карандаш" },
    { category: "Школа", normal: "доска", spy: "парта" },
    { category: "Профессии", normal: "врач", spy: "медсестра" },
    { category: "Интернет", normal: "браузер", spy: "сайт" },
    { category: "Ягоды", normal: "клубника", spy: "малина" },
    { category: "Птицы", normal: "воробей", spy: "синица" },
    { category: "Дом", normal: "кухня", spy: "ванная" },
    { category: "Техника", normal: "смартфон", spy: "планшет" },
    { category: "Города", normal: "Москва", spy: "Питер" },
    { category: "Кино", normal: "актёр", spy: "режиссёр" },
    { category: "Игры", normal: "шахматы", spy: "шашки" },
    { category: "Звёзды", normal: "Солнце", spy: "Полярная" },
    { category: "Рыбы", normal: "карп", spy: "щука" },
    { category: "Горы", normal: "Эверест", spy: "Килиманджаро" },
    { category: "Языки", normal: "русский", spy: "украинский" },
    { category: "Офис", normal: "принтер", spy: "сканер" },
    { category: "Инструменты", normal: "молоток", spy: "отвёртка" },
    { category: "Еда", normal: "пицца", spy: "бургер" },
    { category: "Звуки", normal: "гудок", spy: "сирена" },
    { category: "Кухня", normal: "кастрюля", spy: "сковорода" },
    { category: "Игрушки", normal: "мяч", spy: "кукла" },
    { category: "Лес", normal: "берёза", spy: "сосна" },
    { category: "Интерьер", normal: "картина", spy: "зеркало" },
    { category: "Инструменты", normal: "пила", spy: "топор" },
    { category: "Погода", normal: "снег", spy: "дождь" },
    { category: "Медицина", normal: "таблетка", spy: "укол" },
    { category: "Обувь", normal: "сандалии", spy: "туфли" },
    { category: "Вода", normal: "речка", spy: "озеро" },
    { category: "Машины", normal: "седан", spy: "внедорожник" },
    { category: "Природа", normal: "гора", spy: "холм" },
    { category: "Здание", normal: "больница", spy: "школа" },
    { category: "Блюда", normal: "борщ", spy: "суп" },
    // ... (можно добавить ещё, если нужно)
  ];
  
  let availableThemes = [...allThemes];
  let words = [];
  let currentIndex = 0;
  
  const wordDisplay = document.getElementById("wordDisplay");
  
  function prepareWords() {
    if (availableThemes.length === 0) {
      availableThemes = [...allThemes]; // Сброс при исчерпании
    }
  
    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    const theme = availableThemes.splice(randomIndex, 1)[0]; // Удаляем использованную тему
  
    words = [theme.normal, theme.normal, theme.spy];
  
    // Перемешиваем
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
  }
  
  let hideTimeout = null;

  function showWord(text) {
    // Сброс предыдущей анимации и таймера
    clearTimeout(hideTimeout);
    wordDisplay.classList.remove("show");
    void wordDisplay.offsetWidth;
  
    // Установка текста и запуск анимации
    wordDisplay.textContent = text;
    wordDisplay.classList.add("show");
  
    // Очистка через 5 секунд
    hideTimeout = setTimeout(() => {
      wordDisplay.textContent = "";
      wordDisplay.classList.remove("show");
    }, 2500);
  }
  
  document.getElementById("getWordBtn").addEventListener("click", () => {
    if (currentIndex === 0) {
      prepareWords();
    }
  
    if (currentIndex < words.length) {
      showWord(`Ваше слово: ${words[currentIndex]}`);
      currentIndex++;
    } else {
      showWord("Все игроки получили слова!");
      currentIndex = 0;
    }
  });