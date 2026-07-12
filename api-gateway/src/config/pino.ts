import pino from 'pino';

const logger = pino({
    transport: { target: process.env.NODE_ENV === 'development' ? 'pino-pretty' : '' },
});

export default logger;
