import { ObjectId } from 'mongodb';
import dayjs from 'dayjs';
import { choicesCollection, pollsCollection } from '../database/db.js';

export default async function validatePostedVote(req, res, next) {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.sendStatus(404);
  }

  try {
    const choiceFound = await choicesCollection.findOne({
      _id: new ObjectId(id),
    });
    if (!choiceFound) {
      return res.sendStatus(404);
    }
    const pollFound = await pollsCollection.findOne({
      _id: new ObjectId(choiceFound.pollId),
    });
    const moment = dayjs();
    if (moment.isAfter(dayjs(pollFound.expireAt), 'minute')) {
      return res.sendStatus(403);
    }
    res.locals.moment = moment.format('YYYY-MM-DD HH:mm');
    res.locals.choiceId = id;
    next();
  } catch (err) {
    res.sendStatus(500);
  }
}
