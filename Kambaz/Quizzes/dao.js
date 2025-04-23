import quizzes from "../Database/quizzes.js";

export function findQuizzesForCourse(courseId) {
    return quizzes.filter((quiz) => quiz.course === courseId);
}

export function findQuizById(quizId) {
    return quizzes.find((quiz) => quiz._id === quizId);
}

export function findAllQuizzes() {
    return quizzes;
}

export function createQuiz(quiz) {
    const newQuiz = {
        ...quiz,
        _id: new Date().getTime().toString()
    };
    quizzes.push(newQuiz);
    return newQuiz;
}

export function deleteQuiz(quizId) {
    const index = quizzes.findIndex((quiz) => quiz._id === quizId);
    if (index !== -1) {
        quizzes.splice(index, 1);
        return { status: "ok" };
    }
    return { status: "not found" };
}

export function updateQuiz(quizId, quizUpdates) {
    const index = quizzes.findIndex((quiz) => quiz._id === quizId);
    if (index !== -1) {
        quizzes[index] = {
            ...quizzes[index],
            ...quizUpdates,
            _id: quizId 
        };
        return quizzes[index];
    }
    return null;
}