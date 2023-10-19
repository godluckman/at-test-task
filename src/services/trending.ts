import Global from '../global.js';
import { Request, Response } from 'express';
import { redisClient } from '../main.js';
import { AccountInfo } from '../types.js';

export const authUser = async (req: Request, res: Response) => {
    try {
        const { PHPSESSID } = req.body;

        if (PHPSESSID) {
            await redisClient.set('auth', PHPSESSID);
            return res.status(200).send();
        }

        res.status(400).send('PHPSESSID is required');
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const getBalance = async (req: Request, res: Response) => {
    try {
        const sessionId = await redisClient.get('auth');
        if (!sessionId) {
            return res.status(401).send('Authentication required');
        }

        const accountInfoResponse = await fetch(`${Global.TRENDING_URL}/advertiserapi/payment/getinfo`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Cookie: `PHPSESSID=${sessionId}`,
            },
        });

        if (!accountInfoResponse.ok) {
            return res.status(401).send('Authentication Failed');
        }
        const { data } = (await accountInfoResponse.json()) as AccountInfo;

        res.status(200).json({ status: true, data });
    } catch (error) {
        res.status(500).json({ error });
    }
};
