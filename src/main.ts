import express from 'express';
import trendingRouter from './routes/trendingRouter.js';
import {createRedisClient} from './services/redis.js';
import Global from './global.js';

const app = express();
export const redisClient = await createRedisClient();

app.use(express.json());

app.use('/', trendingRouter);

app.listen(Global.PORT, () => {
    console.log(`Server started on port ${Global.PORT}`);
});
