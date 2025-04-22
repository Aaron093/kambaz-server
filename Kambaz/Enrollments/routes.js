import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  });
  app.delete("/api/enrollments/", (req, res) => {
    const { userId, courseId } = req.params;
    dao.unenrollUserInCourse(userId, courseId);
    res.sendStatus(204);
  });

  app.put("/api/enrollments/", (req, res) => {
    const { userId, courseId } = req.params;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(204);
  });
}
