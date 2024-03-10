import { useEffect } from "react";
const useQuestions = function (dispatch) {
  useEffect(() => {
    const getData = async function () {
      let data = await fetch("http://localhost:8000/questions");
      data = await data.json();
      dispatch({ type: "questions", payload: data });
    };
    getData();
  }, []);
  return;
};

export default useQuestions;
