"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceSchema = void 0;
const Mongoose = require("mongoose");
exports.attendanceSchema = new Mongoose.Schema({
    student_id: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'students'
    },
    attendanceList: {
        type: Array,
    },
});
//# sourceMappingURL=student-attendance.schema.js.map