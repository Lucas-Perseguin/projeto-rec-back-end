import { Router } from 'express';
import { postChoice, voteOnChoice } from '../controllers/choice.controller.js';

const router = Router();

router.post('/choice', postChoice);
router.post('/choice/:id/vote', voteOnChoice);

export default router;
