import { Router } from 'express';
import { postChoice, voteOnChoice } from '../controllers/choice.controller.js';
import validatePostedChoice from '../middlewares/validatePostedChoice.middleware.js';
import validatePostedVote from '../middlewares/validatePostedVote.middleware.js';

const router = Router();

router.post('/choice', validatePostedChoice, postChoice);
router.post('/choice/:id/vote', validatePostedVote, voteOnChoice);

export default router;
