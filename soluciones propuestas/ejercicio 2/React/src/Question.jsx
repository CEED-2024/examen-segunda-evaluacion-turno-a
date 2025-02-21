import Answers from "./Answers"

function Question({ question, onAnswer }) {

  return (
    <div>
      <div className="question-text">
        {question.text}
      </div>
      <Answers answers={question.answers} onAnswer={onAnswer} />
    </div>
  )

}

export default Question
