import { Router } from 'express';

const router = Router();

router.get('/choice');
router.post('/choice/:id/vote');

export default router;
