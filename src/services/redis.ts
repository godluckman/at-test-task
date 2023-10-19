import { createClient } from 'redis';
import Global from '../global.js';

export const createRedisClient = async () => {
    const client = createClient({
        url: Global.REDIS_URL
    } );
    client.on('error', (err) => {
        console.error(err);
    });
    await client.connect();
    return client;
};