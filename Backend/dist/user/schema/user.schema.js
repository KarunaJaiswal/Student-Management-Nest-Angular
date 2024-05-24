"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const Mongoose = require("mongoose");
exports.userSchema = new Mongoose.Schema({
    email: String,
    password: String,
    auth_token: String
});
//# sourceMappingURL=user.schema.js.map