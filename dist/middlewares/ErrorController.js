"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorController = void 0;
const ErrorsMessagesFr_js_1 = require("../enum/ErrorsMessagesFr.js");
class ErrorController {
    static handle(err, req, res, next) {
        res.status(err.status || 500).json({
            success: false,
            error: err.message || ErrorsMessagesFr_js_1.ErrorsMessagesFr.ERREUR_INTERNE
        });
    }
}
exports.ErrorController = ErrorController;
//# sourceMappingURL=ErrorController.js.map