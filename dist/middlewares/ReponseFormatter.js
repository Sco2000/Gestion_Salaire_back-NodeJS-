"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseFormatter = void 0;
const StatusCode_js_1 = require("../enum/StatusCode.js");
class ReponseFormatter {
    static success(res, data, message, status = StatusCode_js_1.HttpStatusCode.OK) {
        return res.status(status).json({
            succes: true,
            message,
            data
        });
    }
}
exports.ReponseFormatter = ReponseFormatter;
//# sourceMappingURL=ReponseFormatter.js.map