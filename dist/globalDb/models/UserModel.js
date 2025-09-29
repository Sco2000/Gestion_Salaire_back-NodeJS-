"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    login: zod_1.z.string().min(3),
    password: zod_1.z.string().min(6)
});
//# sourceMappingURL=UserModel.js.map