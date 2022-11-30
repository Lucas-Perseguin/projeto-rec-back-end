import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';
import { choicesCollection, pollsCollection } from '../database/db.js';

export default async function validatePostedChoice(req, res, next) {
  const { title, pollId } = req.body;
  if (!title) {
    return res.sendStatus(422);
  }

  try {
    const pollFound = await pollsCollection.findOne({
      _id: new ObjectId(pollId),
    });
    if (!pollFound) {
      return res.sendStatus(404);
    }
    const choiceFound = await choicesCollection.findOne({ title, pollId });
    if (choiceFound) {
      return res.sendStatus(409);
    }
    const moment = dayjs();
    if (moment.isAfter(dayjs(pollFound.expireAt), 'minute')) {
      return res.sendStatus(403);
    }
    next();
  } catch (err) {
    res.sendStatus(500);
  }
}
