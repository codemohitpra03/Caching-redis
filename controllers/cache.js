import Redis from "redis"
import decycle from 'json-stringify-safe';

const redisClient = Redis.createClient()

const DEFAULT_EXPIRATION = 3600

redisClient.connect().catch(console.error)

redisClient.on('ready', ()=> {
    console.log('Connected!');
    
});

export const getOrSetCache = async (key, callBack) => {
    return new Promise( async (resolve, reject)=>{
        const cachedResponse = await redisClient.GET(key);
        if(cachedResponse==null){
            console.log("cache miss");
            const freshData = await callBack();

            redisClient.SETEX(key, DEFAULT_EXPIRATION, JSON.stringify(decycle(freshData.data)))
            // res.status(200).json(JSON.parse(decycle(freshData)))
            resolve(JSON.parse(decycle(freshData.data)))
        }else{
            console.log("cache hit");
            
            return resolve(JSON.parse(JSON.parse(cachedResponse)))
        }
    })
}