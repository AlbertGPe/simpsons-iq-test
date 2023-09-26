import { useState } from "react";
import questions from "./components/questions";
import characters from "./components/characters";

function App() {

  const [actualQuestion, setActualQuestion] = useState(0);
  const [puntuation, setPuntuation] = useState(0);
  const [isFinished, setIsFinished] = useState(false)

  function handleAnswerSubmit (isCorrect, ev){
    //add puntuation
    if (isCorrect) {
      setPuntuation(puntuation + 1)
    }

    //add styles correct or incorret answers
    ev.target.classList.add(isCorrect ? 'correct' : 'incorrect');

    //next question
    setTimeout(() => {
      if (actualQuestion === questions.length - 1) {
        setIsFinished(true)
      } else {
        setActualQuestion(actualQuestion + 1)
      }
    }, 500)
  }

  if (isFinished) //TODO show image with character and puntuation. ARRAY of images and take image as puntuation (ARRAY[puntuation])
    return (
      <main className="app">
        <div className="end-game">
          <img src={characters[puntuation].image} alt="" />
          <span className="final-sentence">You are {characters[puntuation].name}!. You've got {puntuation} out of {questions.length}</span>
          <button onClick={() => window.location.href="/"}>Play Again!</button>
        </div>
      </main>
      );

  return (
    <main className="app">
      <div className="left-side">
        <div className="question-number">
          <span>Question {actualQuestion + 1} of {questions.length}</span>
        </div>
        <div className="title">
          {questions[actualQuestion].title}
        </div>
      </div>
      <div className="right-side">
        {questions[actualQuestion].options.map((answer) => (
          <button key={answer.answer} onClick={(ev) => handleAnswerSubmit(answer.isCorrect, ev)}> {answer.answer} </button>
        ))}
      </div>
    </main>
  );
}

export default App;
