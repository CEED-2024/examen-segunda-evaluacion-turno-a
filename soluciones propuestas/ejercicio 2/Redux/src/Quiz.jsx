import { useSelector } from "react-redux";
import Question from "./Question";
import quiz from "./quiz";

function Quiz() {
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const correctAnswers = useSelector((state) => state.quiz.correctAnswers);
  const wrongAnswers = useSelector((state) => state.quiz.wrongAnswers);
  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <h1>{quiz.title}</h1>

      <Question question={currentQuestion} />

      <div className="total">
        Correct: <span className="correct">{correctAnswers}</span>
        &nbsp;&nbsp;Wrong: <span className="wrong">{wrongAnswers}</span>
      </div>
    </div>
  );
}

export default Quiz;

