import express from 'express';
const router = express.Router();

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Service is up and running' });
});

export default router;
