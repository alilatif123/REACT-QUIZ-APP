import { useState } from "react";

const Question = function ({
  questions,
  currentQuestion,
  myScore,
  dispatch,
  answerChoosen,
}) {
  if (!questions) return;
  let questionDisplay = questions[currentQuestion];
  if (questionDisplay) {
    console.log(questionDisplay.question);
    return !answerChoosen ? (
      <>
        <div className="start options">
          <h4>{questionDisplay.question}</h4>
          {questionDisplay.options.map((element, index) => {
            return (
              <div className="btn-option">
                <button
                  onClick={() => {
                    dispatch({
                      type: "answerSelected",
                      payload: !answerChoosen,
                    });
                    if (index === questionDisplay.correctOption) {
                      dispatch({
                        type: "scoreUpdation",
                        payload: questionDisplay.points,
                      });
                    }
                  }}
                  className="btn-option.correct btn btn-option"
                >
                  {element}
                </button>
              </div>
            );
          })}
        </div>
      </>
    ) : (
      <div className="start options">
        <h4>{questionDisplay.question}</h4>
        {questionDisplay.options.map((element, index) => {
          return (
            <div className="btn-option">
              <button
                disabled
                style={
                  index === questionDisplay.correctOption
                    ? { backgroundColor: "#387ADF" }
                    : { backgroundColor: "#FBA834" }
                }
                className="btn-option.correct btn btn-option"
              >
                {element}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Question;
