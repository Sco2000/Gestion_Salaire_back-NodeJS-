"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const env_1 = require("./config/env");
// const OMPORT = process.env.OMPORT || 3000;
app_js_1.default.listen(env_1.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${env_1.PORT}`);
});
//# sourceMappingURL=server.js.map