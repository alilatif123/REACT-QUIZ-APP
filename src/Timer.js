import { useEffect, useReducer } from "react";
import Next from "./Next";
const reducer = function (state, action) {
  if (action.type === "timeUpdate" && state > 0) {
    return state - action.payload;
  } else {
    return 0;
  }
};
const Timer = function ({ quizTimeFinished, answerChoosen, dispatch }) {
  const [countDown, dispatchFunc] = useReducer(reducer, 0.1 * 60);
  useEffect(() => {
    setInterval(() => {
      dispatchFunc({ type: "timeUpdate", payload: 1 });
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <button className="btn">
          {Math.floor(countDown / 60)} : {countDown % 60}
        </button>
      </div>
      <div>
        <Next
          answerChoosen={answerChoosen}
          quizTimeFinished={quizTimeFinished}
          dispatch={dispatch}
          countDown={countDown}
        />
      </div>
    </>
  );
};

export default Timer;
