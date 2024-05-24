"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAttendanceModule = void 0;
const common_1 = require("@nestjs/common");
const student_attendance_service_1 = require("./student-attendance.service");
const student_attendance_schema_1 = require("./schema/student-attendance.schema");
const mongoose_1 = require("@nestjs/mongoose");
const student_attendance_controller_1 = require("./student-attendance.controller");
let StudentAttendanceModule = exports.StudentAttendanceModule = class StudentAttendanceModule {
};
exports.StudentAttendanceModule = StudentAttendanceModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_attendance_controller_1.StudentAttendanceController],
        providers: [student_attendance_service_1.StudentAttendanceService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'student_attendance', schema: student_attendance_schema_1.attendanceSchema }]),
        ],
        exports: [student_attendance_service_1.StudentAttendanceService]
    })
], StudentAttendanceModule);
//# sourceMappingURL=student-attendance.module.js.map