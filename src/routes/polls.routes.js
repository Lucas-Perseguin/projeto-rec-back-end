import { Router } from 'express';
import {
  getPollChoices,
  getPollResult,
  getPolls,
  postPoll,
} from '../controllers/polls.controller.js';

const router = Router();

router.get('/poll', getPolls);
router.post('/poll', postPoll);
router.get('/poll/:id/choice', getPollChoices);
router.get('/poll/:id/result', getPollResult);

export default router;
