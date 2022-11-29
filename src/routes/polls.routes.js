import { Router } from 'express';

const router = Router();

router.get('/poll');
router.post('/poll');
router.get('/poll/:id/choice');
router.get('/poll/:id/result');

export default router;
