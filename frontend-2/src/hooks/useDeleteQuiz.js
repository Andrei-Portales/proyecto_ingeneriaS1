import database from "../firebase";

const useDeleteQuiz = (id) => {
  // 1. Step
  // Delete all exercises associated to the quiz to be deleted
  database.ref("exercises").on("value", (snapshot) => {
    snapshot.forEach((snap) => {
      if (snap.val().quiz_id === id) {
        database.ref("exercises").child(snap.val().id).remove();
      }
    });
  });
  // 2. Sptep
  // Delete the quiz
  database.ref("quiz").child(id).remove();
};

export default useDeleteQuiz;
