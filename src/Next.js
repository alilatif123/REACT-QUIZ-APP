const Next = function ({ answerChoosen, countDown, dispatch }) {
  console.log(countDown);
  return (
    <button
      className="btn"
      onClick={() => {
        dispatch({ type: "next", payload: 1 });
        dispatch({
          type: "answerSelected",
          payload: false,
        });
        if (countDown <= 0) {
          console.log(`Within Next Button ${countDown}`);
          dispatch({ type: "quizTimeFinished", payload: true });
        }
      }}
    >
      Next
    </button>
  );
};
export default Next;
