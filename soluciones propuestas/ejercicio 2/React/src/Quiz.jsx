import { useState } from "react"
import Question from "./Question"
import quiz from "./quiz"

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const currentQuestion = quiz.questions[currentQuestionIndex]

  const handleNextQuestion = () => {
    if(currentQuestionIndex >= quiz.questions.length -1 ) return
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  }

  const handleAnswerSelection = (text) => {
    if(correctAnswers + wrongAnswers == quiz.questions.length) return

    const index = currentQuestion.answers.indexOf(text)
    const isCorrect = currentQuestion.correct === index
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1)
    } else {
      setWrongAnswers((prev) => prev + 1)
    }

    handleNextQuestion()
  }

  return (
    <div className="quiz">
      <h1>{quiz.title}</h1>

      <Question question={currentQuestion} onAnswer={handleAnswerSelection} />

      <div className="total">
        Correct: <span className="correct">{correctAnswers}</span>
        &nbsp;&nbsp;Wrong: <span className="wrong">{wrongAnswers}</span>
      </div>
    </div>
  )
}

export default Quiz

