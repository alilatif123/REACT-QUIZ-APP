import { useEffect } from "react";

const Finished = function ({ questions, myScore, highScore, dispatch }) {
  let totalPoints = 0;
  if (questions.length > 0) {
    questions.forEach((element, index) => {
      totalPoints = totalPoints + element.points;
    });
  }
  useEffect(() => {
    if (myScore > localStorage.getItem("hScore")) {
      localStorage.setItem("hScore", myScore);
      dispatch({ type: "highScore", payload: highScore });
    }
  }, []);
  const percentage = Math.floor((myScore / totalPoints) * 100);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        You're welcome! Glad you appreciated the quiz. 😊
      </h3>
      <button className="btn" style={{ margin: "auto" }}>
        You Scored {myScore} out of {totalPoints} Points ({percentage}%)
      </button>
      <h5 style={{ textAlign: "center" }}>
        (HighScore: {localStorage.getItem("hScore")} points)
      </h5>
      <div style={{ margin: "auto" }}>
        {percentage < 50 ? (
          <button
            className="btn"
            style={{
              backgroundColor: "#8B0000",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            Let's work on it together
          </button>
        ) : percentage < 60 ? (
          <button
            className="btn"
            style={{
              backgroundColor: "#FF6347",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            Keep practicing!
          </button>
        ) : percentage < 70 ? (
          <button
            className="btn"
            style={{
              backgroundColor: "#FFA500",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            Keep it up!
          </button>
        ) : percentage < 80 ? (
          <button
            className="btn"
            style={{
              backgroundColor: "#FFFF00",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            Good job!
          </button>
        ) : percentage < 90 ? (
          <button
            className="btn"
            style={{
              backgroundColor: "#0000FF",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            Well done!
          </button>
        ) : (
          <button
            className="btn"
            style={{
              backgroundColor: "#008000",
              margin: "auto",
              marginTop: "25px",
            }}
          >
            Excellent work!
          </button>
        )}
      </div>
    </div>
  );
};

export default Finished;
