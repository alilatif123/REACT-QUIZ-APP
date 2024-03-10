const globalReducer = function (oldState, action) {
  switch (action.type) {
    case "questions":
      return { ...oldState, questions: action.payload };
    case "next":
      return {
        ...oldState,
        currentQuestion: oldState.currentQuestion + action.payload,
      };
    case "scoreUpdation":
      return { ...oldState, myScore: oldState.myScore + action.payload };
    case "answerSelected":
      return { ...oldState, answerChoosen: action.payload };
    case "quizTimeFinished":
      return { ...oldState, quizTimeFinished: action.payload };
    case "quizStarted":
      return { ...oldState, quizStarted: action.payload };
    case "highScore":
      return { ...oldState, highScore: action.payload };
    default:
      return new Error("Incorect Action");
  }
};
export default globalReducer;
