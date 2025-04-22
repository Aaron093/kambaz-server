import * as QuizDao from "./dao.js";
import * as QuestionDao from "../Questions/dao.js"

export default function QuizzesRoutes(app) {
  app.get("/api/quizzes", async (req, res) => {
    try {
      const quizzes = await QuizDao.findAllQuizzes();
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quizzes" });
    }
  }); 

  app.get("/api/quizzes/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const quiz = await QuizDao.findQuizById(quizId);
      if (!quiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quiz" });
    }
  });

  app.post("/api/quizzes", async (req, res) => {
    try {
      const newQuiz = req.body;
      const insertedQuiz = await QuizDao.createQuiz(newQuiz);
      res.status(201).json(insertedQuiz);
    } catch (error) {
      res.status(500).json({ error: "Failed to create quiz" });
    }
  });

  app.delete("/api/quizzes/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const result = await QuizDao.deleteQuiz(quizId);
      if (result.status === "not found") {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete quiz" });
    }
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    try {
      const { quizId } = req.params;
      const quizUpdates = req.body;
      const updatedQuiz = await QuizDao.updateQuiz(quizId, quizUpdates);
      if (!updatedQuiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      res.json(updatedQuiz);
    } catch (error) {
      res.status(500).json({ error: "Failed to update quiz" });
    }
  });

  // Questions
  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    try {
      const { quizId } = req.params;
      const questions = await QuestionDao.findQuestionsForQuiz(quizId);
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch questions" });
    }
  });

  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    try {
      const { quizId } = req.params;
      const question = {
        ...req.body,
        quiz: quizId,
      };
      const newQuestion = await QuestionDao.createQuestion(question);
      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(500).json({ error: "Failed to create question" });
    }
  });
}