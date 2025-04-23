import questions from "../Database/questions.js";

export function findQuestionsForQuiz(quizId) {
  return questions.filter((question) => question.quiz === quizId);
}

export function createQuestion(question) {
  const newId = Date.now().toString();

  const newQuestion = {
    ...question,
    _id: newId
  };

  questions.push(newQuestion);
  
  return newQuestion;
}

export function deleteQuestion(questionId) {
  const index = questions.findIndex(q => q._id === questionId);
  if (index === -1) {
    return { status: "not found" };
  }
  questions.splice(index, 1);
  return { status: "ok" };
}

export function updateQuestion(questionId, questionUpdates) {
  const index = questions.findIndex(q => q._id === questionId);
  if (index === -1) {
    return null;
  }
  
  const updatedQuestion = {
    ...questions[index],
    ...questionUpdates,
    _id: questionId
  };
  
  questions[index] = updatedQuestion;
  return updatedQuestion;
}
