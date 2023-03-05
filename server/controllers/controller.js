import Question from "../models/questionModel.js";
import Result from "../models/resultModel.js";
import { questions, answers } from "../database/data.js";

/** get all questions */
export async function getQuestions(req, res) {
  try {
    const q = await Question.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questions */
export async function insertQuestions(req, res) {
  try {
    Question.insertMany({ questions, answers }, (err, data) => {
      res.json({ msg: "Data Saved Successfully!" });
    });
  } catch (error) {
    res.json({ error });
  }
}

/** delete all questions */
export async function dropQuestions(req, res) {
  try {
    await Question.deleteMany();
    res.json({ msg: "Questions Deleted Successfully!" });
  } catch (error) {
    res.json({ error });
  }
}

/** get all results */
export async function getResult(req, res) {
  try {
    const r = await Result.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

/** post all results */
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achievement } = req.body;
    if (!username && !result) throw new Error("Data Not Provided!");

    Result.create(
      { username, result, attempts, points, achievement },
      (err, data) => {
        res.json({ msg: "Result Saved Successfully!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

/** delete all results */
export async function dropResult(req, res) {
  try {
    await Result.deleteMany();
    res.json({ msg: "Result Deleted Successfully!" });
  } catch (error) {
    res.json({ error });
  }
}
