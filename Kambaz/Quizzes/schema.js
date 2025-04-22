import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    desc: String,
    points: String,
    due: String,
    available: String,
    published: Boolean,
    type: String,
    group: String,
    shuffle: Boolean,
    time_limit: String,
    attempts: Number,
    multiple_attempts: Boolean,
    view_responses: Boolean,
    show_correct_answers: Boolean,
    one_question_at_a_time: Boolean,
    lockdown_browser: Boolean,
    required_to_view: Boolean,
    webcam: Boolean,
    lock_questions_after_answering: Boolean,
  },
  { collection: "quizzes" }
);
export default schema;