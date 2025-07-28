import express from 'express';
import { sendWelcomeEmail } from '../controllers/subscribeController.js';

const router = express.Router();
router.post('/', sendWelcomeEmail);
export default router;
