import { useState } from "react";

function App() {
  const [guessingText, setGuessingText] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [guessNumber, setGuessNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );
  const [inputGuessNumber, setInputGuessNumber] = useState("");

  const handleGuess = () => {
    if (!inputGuessNumber) return alert("Please input your guess number.");

    if (Number(inputGuessNumber) > 20)
      return alert("Please guess the number from 1 to 20.");

    if (Number(inputGuessNumber) < 1)
      return alert("Please guess the number from 1 to 20.");

    if (Number(inputGuessNumber) > Number(guessNumber)) {
      setGuessingText("Too High!");
      setScore((c) => c - 1);

      if (score === 1) {
        setScore(0);
        setGuessingText("Game Over!");
      }

      return;
    }

    if (Number(inputGuessNumber) < Number(guessNumber)) {
      setGuessingText("Too Low!");
      setScore((c) => c - 1);

      if (score === 1) {
        setScore(0);
        setGuessingText("Game Over!");
      }

      return;
    }

    if (Number(inputGuessNumber) === Number(guessNumber)) {
      setGuessingText("Correct Number!");
      if (score > highscore) {
        setHighscore(score);
      }
      return;
    }
  };

  const handlePlayAgain = () => {
    setScore(20);
    setGuessNumber(Math.floor(Math.random() * 20) + 1);
    setInputGuessNumber("");
    setGuessingText("Start guessing...");
  };

  return (
    <div>
      <div className="text-center mt-16 flex flex-col gap-y-10">
        <h1
          className={`text-6xl font-semibold 
            ${guessingText === "Correct Number!" ? "text-green-500" : ""} 
            ${guessingText === "Game Over!" ? "text-red-500" : ""}
          `}
        >
          {guessingText === "Correct Number!"
            ? "Congratulations!"
            : guessingText === "Game Over!"
            ? "Game Over!"
            : "Guess My Number!"}
        </h1>

        <div className=" mx-auto bg-white w-[160px] h-[160px] text-black flex justify-center items-center text-7xl">
          {guessingText === "Correct Number!" ? guessNumber : "?"}
        </div>

        <p className="text-3xl">( Guess from 1 to 20 )</p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-2 gap-x-10 ">
          <div className="flex flex-col gap-y-2 justify-self-end">
            <input
              disabled={
                guessingText === "Correct Number!" ||
                guessingText === "Game Over!"
                  ? true
                  : false
              }
              value={inputGuessNumber}
              onChange={(e) => setInputGuessNumber(e.target.value)}
              className={`h-[100px] w-[140px] pl-[16px] text-4xl text-center flex justify-center items-center text-black ${
                guessingText === "Correct Number!" ||
                guessingText === "Game Over!"
                  ? "bg-gray-400 cursor-not-allowed"
                  : ""
              }`}
              type="number"
            />

            <button
              disabled={
                guessingText === "Correct Number!" ||
                guessingText === "Game Over!"
                  ? true
                  : false
              }
              onClick={handleGuess}
              className={` w-full text-black border border-gray-400 rounded px-4 py-2 font-semibold ${
                guessingText === "Correct Number!" ||
                guessingText === "Game Over!"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-white"
              }`}
            >
              Guess!
            </button>
          </div>

          <div className="flex flex-col gap-y-2">
            <p
              className={`text-3xl font-semibold mb-3 
                ${guessingText === "Correct Number!" ? "text-green-500" : ""}
                ${guessingText === "Game Over!" ? "text-red-500" : ""}
              `}
            >
              {guessingText === "Start guessing..."
                ? "Start guessing..."
                : guessingText === "Correct Number!"
                ? "Correct Number!"
                : guessingText === "Game Over!"
                ? "Oooopppss!!!"
                : guessingText === "Too Low!"
                ? "Too Low!"
                : guessingText === "Too High!"
                ? "Too High!"
                : ""}
            </p>

            <div className="flex flex-col text-xl gap-y-2">
              <span>💯 Score: {score}</span>
              <span>🏆 Highscore: {highscore}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex justify-center">
        <button
          onClick={handlePlayAgain}
          className="bg-white  text-black border border-gray-400 rounded px-4 py-2 font-semibold"
        >
          Play Again!
        </button>
      </div>
    </div>
  );
}

export default App;
