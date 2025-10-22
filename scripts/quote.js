const quotes = [
  {
    text: "Charm is a way of getting the answer yes without asking a clear question.",
    author: "Albert Camus",
  },
  {
    text: "Autumn is a second spring when every leaf's a flower.",
    author: "Albert Camus",
  },
  {
    text: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
  },
  {
    text: "A man who has not passed through the inferno of his passions has never overcome them.",
    author: "Carl Jung",
  },
  {
    text: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
    author: "H.P. Lovecraft",
  },
  {
    text: "Courage is knowing what not to fear.",
    author: "Plato",
  },
];

function showQuote() {
  console.log("Attempting to show quote..."); // Debug log

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const textElement = document.getElementById("quote-text");
  const authorElement = document.getElementById("quote-author");

  textElement.textContent = `"${randomQuote.text}"`;
  authorElement.textContent = `— ${randomQuote.author}`;

  console.log("Quote displayed: ", randomQuote);
}

showQuote();
console.log("Quote displayed successfully!");
