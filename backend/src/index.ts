import express from 'express';
import { jwtSecret } from './config';

const app = express();
const port = 3000;

app.use(express.json());

// Example route that uses JWT
app.get('/protected', (req, res) => {
    // Middleware to verify JWT token
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send('Access Denied');

    try {
        jwt.verify(token, jwtSecret);
        res.send('Access granted');
    } catch (err) {
        res.status(400).send('Invalid token');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
