import { useDispatch } from "react-redux";
import { selectAnswer } from "./redux/quizSlice";

function Answers({ answers }) {
  const dispatch = useDispatch()

  return (
    <div className="answers">
      {answers.map((answer, index) => (
        <button
          key={index}
          className="answer"
          onClick={() => dispatch(selectAnswer(answer))}
        >
          {answer}
        </button>
      ))}
    </div>
  )
}

export default Answers;
