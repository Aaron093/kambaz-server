// const express = require("express");
import express from "express";
import HelloRoutes from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParamaters.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import AnswersRoutes from "./Kambaz/Answers/routes.js";
import QuizzesRoutes from "./Kambaz/Quizzes/routes.js";
import QuestionsRoutes from "./Kambaz/Questions/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
  })
);

// app.use(
//   cors({
//     credentials: true,
//     origin: (origin, callback) => {
//       console.log("Request Origin:", origin);
//       if (
//         !origin ||
//         origin.includes(".netlify.app") ||
//         origin === "http://localhost:3001"
//       ) {
//         callback(null, true);
//       } else {
//         console.error("CORS Error: Not allowed by CORS");
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "Kambaz",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());

HelloRoutes(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
AnswersRoutes(app);
QuizzesRoutes(app);
QuestionsRoutes(app);
EnrollmentRoutes(app);
app.listen(process.env.PORT || 4000);
