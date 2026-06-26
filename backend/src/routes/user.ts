import express from 'express';
const router = express.Router();

// Import the UserDeletionService
import { UserDeletionService } from '../services/user/userDeletionService';

// Instantiate the UserDeletionService
const userDeletionService = new UserDeletionService();

router.post('/delete-account', async (req, res) => {
    const userId = req.body.userId;
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }
    try {
        await userDeletionService.deleteUser(userId);
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete account', error: error.message });
    }
});

export default router;
