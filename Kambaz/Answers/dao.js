import answers from "../Database/answers.js";

export function getAnswersByUserId(userId) {
    return answers.filter((answer) => answer.user === userId);
}
export function getAnswersByQuizId(quizId) {
    return answers.filter((answer) => answer.quiz === quizId);
}
export function getAnswersByQuizIdAndUserId(quizId, userId) {
    return answers.filter((answer) => answer.quiz === quizId && answer.user === userId);
}

export function createAnswer(answer) {
  delete answer._id
  return answers.push(answer);

}
export function deleteAnswer(answerId) {
    return answers.filter((answer) => answer._id !== answerId);

}
export function updateAnswer(answerId, answerUpdates) {
    return answers.map((answer) => answer._id === answerId ? {...answer, ...answerUpdates} : answer);

}
  
   