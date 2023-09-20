import { useState } from "react";
import questions from "./components/questions";

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
    //pass next question
  }

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
