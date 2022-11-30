import { choicesCollection } from '../database/db.js';

export async function postChoice(req, res) {
  const { title, pollId } = req.body;

  try {
    await choicesCollection.insertOne({ title, pollId });
    res.status(201).send({ title, pollId });
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function voteOnChoice(req, res) {
  try {
  } catch (err) {
    res.sendStatus(500);
  }
}
