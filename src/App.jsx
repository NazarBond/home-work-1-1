import "./App.css";

function App() {
  const name = "Назар";

  const imageUrl =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600";

  const imageAlt = "Красивий пейзаж";

  const favoriteSite = {
    siteName: "Google",
    url: "https://www.google.com/",
  };

  const numberOne = 25;
  const numberTwo = 17;

  const sum = numberOne + numberTwo;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>{name}</h1>

      <p>Ласкаво просимо до нашого сайту!</p>

      <img src={imageUrl} alt={imageAlt} width="400" />

      <p>
        Улюблений сайт:{" "}
        <a href={favoriteSite.url} target="_blank" rel="noreferrer">
          {favoriteSite.siteName}
        </a>
      </p>

      <p>Сума чисел: {sum}</p>

      <h2>Кольори</h2>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
