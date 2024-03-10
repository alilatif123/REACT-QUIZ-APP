const Progress = function ({ questions, currentQuestion, myScore }) {
  let totalPoints = 0;
  if (!questions) return;
  if (questions.length > 0) {
    questions.forEach((element, index) => {
      totalPoints = totalPoints + element.points;
    });
  }

  return (
    <header className="progress">
      <progress value={currentQuestion} max={questions.length}>
        {currentQuestion}
      </progress>
      <p>
        Question <strong>{currentQuestion + 1}</strong> / {questions.length}
      </p>
      <p>
        <strong>{myScore}</strong> /{totalPoints}
      </p>
    </header>
  );
};
export default Progress;
