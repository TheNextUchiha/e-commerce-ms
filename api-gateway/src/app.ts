import express from 'express';
import { ZodError } from 'zod';

import SignUpSchema from './schemas/signUp.js';
import logger from './config/pino.js';

import type { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.post('/api/user/sign-up', async function (req: Request, res: Response) {
    try {
        SignUpSchema.parse(req.body);

        logger.info('Request data validated. Redirecting to the User service.');

        // TODO: Send request to the User service
    } catch (err) {
        if (err instanceof ZodError) {
            res.status(400).json({ message: 'Data validation error', error: err });

            return;
        }

        res.status(500).json({ message: 'Something went wrong.', error: err });
    }
});

const PORT = process.env.API_GATEWAY_PORT || 3000;

app.listen(PORT, () => {
    const startedAt = new Date().toLocaleString('en-us', { dateStyle: 'medium', timeStyle: 'medium' });

    console.log(`[API Gateway] Server started at ${startedAt} and is running on port ${PORT}`);
});
