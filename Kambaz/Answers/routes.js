import * as AnswerDao from "./dao.js";

export default function AnswersRoutes(app) {

  app.post("/api/quizzes/:quizId/answers/:userId", async (req, res) => {
    const { quizId, userId } = req.params;
    const answer = {
        ...req.body,
        quiz: quizId,
        user: userId,
        attempt: 1,
      };
    const createdAnswer = await AnswerDao.createAnswer(answer);
    res.status(201).json(createdAnswer);
  });
  
  app.get("/api/quizzes/:quizId/answers", async (req, res) => {
    const { quizId } = req.params;
    const answers = await AnswerDao.getAnswersByQuizId(quizId);
    res.json(answers);
  });

  app.get("/api/quizzes/answers/:userId", async (req, res) => {
    const { userId } = req.params;
    const answers = await AnswerDao.getAnswersByUserId(userId);
    res.json(answers);
  });

  app.get("/api/quizzes/:quizId/answers/:userId", async (req, res) => {
    const { quizId, userId } = req.params;
    const answers = await AnswerDao.getAnswersByQuizIdAndUserId(quizId, userId);
    res.json(answers);
  });


  app.put("/api/quizzes/answers/:answerId", async (req, res) => {
    const { answerId } = req.params;
    const updatedData = req.body;
    const updatedAnswer = await AnswerDao.updateAnswer(answerId, updatedData);
    res.json(updatedAnswer);
  });

  app.delete("/api/quizzes/:quizId/answers/:answerId", async (req, res) => {
    const { answerId } = req.params;
    const status = await AnswerDao.deleteAnswer(answerId);
    res.send(status);
  });
}