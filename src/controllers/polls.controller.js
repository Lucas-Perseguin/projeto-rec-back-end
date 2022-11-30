import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';
import { choicesCollection, pollsCollection } from '../database/db.js';

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
    const polls = await pollsCollection.find().toArray();
    res.status(200).send(polls);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function getPollChoices(req, res) {
  const { id } = req.params;

  try {
    const pollFound = await pollsCollection.findOne({ _id: new ObjectId(id) });
    if (!pollFound) {
      return res.sendStatus(404);
    }
    const pollChoices = await choicesCollection.find({ pollId: id });
    res.status(200).send(pollChoices);
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
