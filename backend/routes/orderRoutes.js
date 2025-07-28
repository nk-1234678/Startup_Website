import express from 'express';
import { createOrder } from '../controllers/orderController.js';
import { customerProtect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/', customerProtect, upload.single('paymentProof'), createOrder);


export default router;






