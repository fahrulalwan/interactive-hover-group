import "./App.scss";
import { useState } from "react";

function App() {
  const imagesList = [
    {
      name: "Saham",
      imageUrl:
        "https://play-lh.googleusercontent.com/ufY1G2MCu5q7J41HmmWQkyf1cABPfqA8wS-sra9OTrgVE5dbxGLjRtBUzXAKlmcKAaI",
    },
    {
      name: "Reksa Dana",
      imageUrl:
        "https://play-lh.googleusercontent.com/ufY1G2MCu5q7J41HmmWQkyf1cABPfqA8wS-sra9OTrgVE5dbxGLjRtBUzXAKlmcKAaI",
    },
    {
      name: "Emas",
      imageUrl:
        "https://play-lh.googleusercontent.com/ufY1G2MCu5q7J41HmmWQkyf1cABPfqA8wS-sra9OTrgVE5dbxGLjRtBUzXAKlmcKAaI",
    },
    {
      name: "SBN",
      imageUrl:
        "https://play-lh.googleusercontent.com/ufY1G2MCu5q7J41HmmWQkyf1cABPfqA8wS-sra9OTrgVE5dbxGLjRtBUzXAKlmcKAaI",
    },
    {
      name: "Robo",
      imageUrl:
        "https://play-lh.googleusercontent.com/ufY1G2MCu5q7J41HmmWQkyf1cABPfqA8wS-sra9OTrgVE5dbxGLjRtBUzXAKlmcKAaI",
    },
    {
      name: "Umroh",
      imageUrl:
        "https://play-lh.googleusercontent.com/ufY1G2MCu5q7J41HmmWQkyf1cABPfqA8wS-sra9OTrgVE5dbxGLjRtBUzXAKlmcKAaI",
    },
  ];

  const [highlighedIndex, setHighlightedIndex] = useState(-1);

  return (
    <section className="flex items-center justify-center p-32 space-x-32">
      <div className="grid grid-cols-2 gap-4">
        {imagesList.map((each, buttonListindex) => (
          <button
            key={each.name}
            onMouseEnter={() => setHighlightedIndex(buttonListindex)}
            onMouseLeave={() => setHighlightedIndex(-1)}
            className="rounded shadow-lg p-3 transition-colors duration-75 bg-green-100 hover:bg-green-400"
          >
            {each.name}
          </button>
        ))}
      </div>

      <div className="rounded-xl p-1 border-8 border-gray-800 w-64 h-96 transform-gpu skew-x-[-10deg] skew-y-[-6deg] rotate-[5deg] inline-grid grid-cols-3 gap-2 content-center">
        {imagesList.map((each, imagesIndex) => (
          <div
            key={each.name}
            className={`p-2 rounded-xl transition-shadow duration-75 transition-tranform ${
              imagesIndex === highlighedIndex
                ? "shadow-xl scale-105"
                : "shadow-none"
            }`}
          >
            <img src={each.imageUrl} alt={each.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
