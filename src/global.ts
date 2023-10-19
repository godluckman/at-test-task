class Global {
    static readonly PORT = process.env.PORT ?? '3000';
    static readonly TRENDING_URL = process.env.TRENDING_URL ?? 'https://trending.bid';
    static readonly REDIS_URL = process.env.REDIS_URL ?? 'redis://redis:6379';
}

export default Global;
