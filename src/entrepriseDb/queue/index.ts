import { Queue } from "bullmq";
import {Redis} from "ioredis";

const connection = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  maxRetriesPerRequest: null
});

export const payRunQueue = new Queue("payRunQueue", { connection });
