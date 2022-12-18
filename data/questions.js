import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(question => {
  const { text, options, answer } = question;
  return new Question(text, options, answer)
});