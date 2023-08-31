const words = [
    "Space", "Technology", "Sustainability", "Adventure", "Communication",
    "Health", "Innovation", "Community", "Education", "Environment",
    "Future", "Creativity", "Social Impact", "Artificial Intelligence",
    "Diversity", "Virtual Reality", "Gaming", "Renewable Energy",
    "Design", "Food", "Mobility", "Collaboration", "Wellness", "Entertainment",
    "Finance"
  ];
  
  function generateRandomIndex() {
    return Math.floor(Math.random() * words.length);
  }
  
  function generateRandomTheme() {
    const wordIndex1 = generateRandomIndex();
    let wordIndex2 = generateRandomIndex();
    while (wordIndex2 === wordIndex1) {
      wordIndex2 = generateRandomIndex();
    }
  
    const theme = words[wordIndex1] + " " + words[wordIndex2];
    return theme;
  }
  
  const word1Element = document.getElementById("word1");
  const word2Element = document.getElementById("word2");
  const spinButton = document.getElementById("spinButton");
  
  spinButton.addEventListener("click", () => {
    const theme = generateRandomTheme();
    const [word1, word2] = theme.split(" ");
    word1Element.textContent = word1;
    word2Element.textContent = word2;
  });
  