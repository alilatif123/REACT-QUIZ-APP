import { useReducer, useEffect } from "react";
import Header from "./Header";

import Progress from "./Progress";
import Question from "./Question";
import Timer from "./Timer";
import useQuestions from "./useQuestions";
import Finished from "./Finished";
import globalReducer from "./globalReducer";
import QuizNotStarted from "./QuizNotStarted";

const App = function () {
  const [state, dispatch] = useReducer(globalReducer, {
    questions: [],
    currentQuestion: 0,
    myScore: 0,
    answerChoosen: false,
    quizTimeFinished: false,
    quizStarted: false,
    highScore: 0,
  });
  const {
    questions,
    currentQuestion,
    myScore,
    answerChoosen,
    quizTimeFinished,
    quizStarted,
    highScore,
  } = state;

  useQuestions(dispatch);
  console.log(`Quiz time is finished? ${quizTimeFinished}`);
  if (!quizStarted) {
    return (
      <div className="app">
        <Header />
        <QuizNotStarted
          questions={questions}
          quizStarted={quizStarted}
          dispatch={dispatch}
          highScore={highScore}
        />
      </div>
    );
  }
  return (
    <div className="app">
      <Header />

      {quizTimeFinished || currentQuestion === questions.length ? (
        <Finished
          myScore={myScore}
          questions={questions}
          highScore={highScore}
          dispatch={dispatch}
        />
      ) : (
        <div>
          <Progress
            questions={questions}
            currentQuestion={currentQuestion}
            myScore={myScore}
          />
          <Question
            questions={questions}
            currentQuestion={currentQuestion}
            myScore={myScore}
            dispatch={dispatch}
            answerChoosen={answerChoosen}
          />

          <div className="footer">
            <Timer
              answerChoosen={answerChoosen}
              quizTimeFinished={quizTimeFinished}
              dispatch={dispatch}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
