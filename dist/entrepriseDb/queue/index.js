"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payRunQueue = void 0;
const bullmq_1 = require("bullmq");
const ioredis_1 = require("ioredis");
const connection = new ioredis_1.Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
    maxRetriesPerRequest: null
});
exports.payRunQueue = new bullmq_1.Queue("payRunQueue", { connection });
//# sourceMappingURL=index.js.map