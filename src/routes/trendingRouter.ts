import { Router } from 'express';
import { authUser, getBalance } from '../services/trending.js';

const trendingRouter = Router();

trendingRouter.get('/balance', getBalance);

trendingRouter.post('/auth', authUser);

export default trendingRouter;
