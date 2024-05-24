"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
const Mongoose = require("mongoose");
exports.studentSchema = new Mongoose.Schema({
    fullname: String,
    fathername: String,
    mothername: String,
    gender: String,
    age: Number,
    std: Number,
    birth_date: Date,
    email: String,
    phone_number: Number,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
});
//# sourceMappingURL=student.schema.js.map