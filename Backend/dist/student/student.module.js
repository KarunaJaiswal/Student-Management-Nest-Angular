"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModule = void 0;
const common_1 = require("@nestjs/common");
const student_controller_1 = require("./student.controller");
const student_service_1 = require("./student.service");
const mongoose_1 = require("@nestjs/mongoose");
const student_schema_1 = require("./schema/student.schema");
const student_attendance_module_1 = require("../student-attendance/student-attendance.module");
let studentModule = exports.studentModule = class studentModule {
};
exports.studentModule = studentModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_controller_1.studentController],
        providers: [student_service_1.studentService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'student', schema: student_schema_1.studentSchema }]),
            student_attendance_module_1.StudentAttendanceModule
        ]
    })
], studentModule);
;
//# sourceMappingURL=student.module.js.map