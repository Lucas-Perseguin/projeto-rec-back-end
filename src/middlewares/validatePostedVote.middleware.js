import { ObjectId } from 'mongodb';
import { choicesCollection, pollsCollection } from '../database/db.js';

export default async function validatePostedVote(req, res, next) {
  const { id } = req.params;

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
    const moment = dayjs().format('YYYY-MM-DD HH:mm');
    if (moment.isAfter(pollFound.expireAt, 'minute')) {
      return res.sendStatus(403);
    }
    res.locals.moment = moment;
    res.locals.choiceId = id;
    next();
  } catch (err) {
    res.sendStatus(500);
  }
}
