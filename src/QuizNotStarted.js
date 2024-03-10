const QuizNotStarted = function ({
  questions,
  quizStarted,
  dispatch,
  highScore,
}) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome to the React Quiz App!!</h2>
      <h3 style={{ textAlign: "center" }}>
        {questions && questions.length} questions to test your React Mastery
      </h3>
      <h1
        style={{ fontSize: "20px", textAlign: "center", marginBottom: "30px" }}
      >
        Beat the top score of{" "}
        <span
          style={{ fontSize: "30px", color: "yellow", fontWeight: "bolder" }}
        >
          {localStorage.getItem("hScore")}
        </span>{" "}
        and aim for an even higher one!
      </h1>
      <button
        className="btn"
        style={{ margin: "auto" }}
        onClick={() => {
          dispatch({ type: "quizStarted", payload: true });
        }}
      >
        Let's Started!
      </button>
    </div>
  );
};

export default QuizNotStarted;
