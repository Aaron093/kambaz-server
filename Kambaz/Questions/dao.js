import questions from "../Database/questions.js";

export function findQuestionsForQuiz(quizId) {
  return questions.filter((question) => question.quiz === quizId);
}

export function createQuestion(question) {
  // Generate a new ID (you might want to use a more sophisticated ID generation)
  const newId = Date.now().toString();
  
  // Create new question object with the generated ID
  const newQuestion = {
    ...question,
    _id: newId
  };
  
  // Add to questions array
  questions.push(newQuestion);
  
  // Return the newly created question
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
  
  // Preserve the original _id
  const updatedQuestion = {
    ...questions[index],
    ...questionUpdates,
    _id: questionId
  };
  
  questions[index] = updatedQuestion;
  return updatedQuestion;
}
