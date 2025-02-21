function Answers({ answers, onAnswer }) {
  return (
    <div className="answers">
      {answers.map((answer, index) => (
        <button
          key={index}
          className="answer"
          onClick={() => onAnswer(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Answers;
