import dayjs from 'dayjs';
import { pollsCollection } from '../database/db.js';

export async function postPoll(req, res) {
  const { title, expireAt } = req.body;

  if (!title) {
    return res.sendStatus(422);
  }

  try {
    const expireAt = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm');
    await pollsCollection.insertOne({ title, expireAt });
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function getPolls(req, res) {
  try {
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function getPollChoices(req, res) {
  try {
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function getPollResult(req, res) {
  try {
  } catch (err) {
    res.sendStatus(500);
  }
}
