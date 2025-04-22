import * as QuestionDao from "./dao.js";

export default function QuizzesRoutes(app) {
  app.get("/api/questions", async (req, res) => {
    const questions = await QuestionDao.findAllQuestions();
    res.json(questions);
  });
  app.get("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const question = await QuestionDao.findQuestionById(questionId);
    res.json(question);
  });
  // get questions for quiz
  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const questions = await QuestionDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  }); 

 app.delete("/api/questions/:questionId", async (req, res) => {
   const { questionId } = req.params;
   const status = await QuestionDao.deleteQuestion(questionId);
   res.send(status);
  });
  app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await QuestionDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });
}