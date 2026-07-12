import express from 'express';

import type { Request, Response } from 'express';
import logger from './config/pino.js';

const app = express();
app.use(express.json());

app.post('/service/users', async function (req: Request, res: Response) {
    logger.info('[User service] Sign-up request received.');

    try {
        // TODO: Save data to DB
    } catch (err) {
        // TODO: Add error handling here
    }

    res.status(201).json({ userId: 'some user id' });
});

const PORT = process.env.USER_SVC_PORT || 3001;

app.listen(PORT, () => {
    const startedAt = new Date().toLocaleString('en-us', { dateStyle: 'medium', timeStyle: 'medium' });

    console.log(`[User Service] Server started at ${startedAt} and is running on port ${PORT}`);
});
