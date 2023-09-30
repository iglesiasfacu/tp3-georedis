const redis = require("redis");

const redisClient = redis.createClient({
  url: "redis://database:6379",
});

const connectRedisClient = async () => {
  try {
    await redisClient.connect();
    console.log("conectado a redis");
    return redisClient;
  } catch (error) {
    console.log("error al conectarse a redis:\n", error);
  }
};

connectRedisClient();

module.exports = redisClient;
