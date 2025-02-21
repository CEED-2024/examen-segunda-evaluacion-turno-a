import Answers from "./Answers";

function Question({ question }) {
  return (
    <div>
      <div className="question-text">
        {question.text}
      </div>
      <Answers answers={question.answers} />
    </div>
  );
}

export default Question;
