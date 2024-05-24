"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const student_attendance_service_1 = require("../student-attendance/student-attendance.service");
let studentService = exports.studentService = class studentService {
    constructor(studentModel, studentAttendanceService) {
        this.studentModel = studentModel;
        this.studentAttendanceService = studentAttendanceService;
    }
    async get() {
        return this.studentModel.find();
    }
    async post(createStudentDTO) {
        const newStudent = await new this.studentModel(createStudentDTO);
        await newStudent.save();
        let attendaceObj = {
            student_id: newStudent._id,
            attendanceList: [
                {
                    month_year: `${new Date().getMonth()}/${new Date().getFullYear()}`,
                    attendanceData: [],
                    holidayList: []
                }
            ]
        };
        await this.studentAttendanceService.postAttendaceService(attendaceObj);
        return newStudent;
    }
    async findById(studentId) {
        const studentExist = await this.studentModel.findById(studentId);
        if (!studentExist) {
            throw new common_1.NotFoundException(`Student #${studentId} not found`);
        }
        return studentExist;
    }
    async update(studentId, studentDataDTO) {
        const studentUpdate = await this.studentModel.findByIdAndUpdate(studentId, studentDataDTO, { new: true });
        if (!studentUpdate) {
            throw new common_1.NotFoundException(`Student #${studentId} not found`);
        }
        return studentUpdate;
    }
    async delete(studentId) {
        const studentDelete = await this.studentModel.findByIdAndDelete(studentId);
        if (!studentDelete) {
            throw new common_1.NotFoundException(`Student #${studentId} not found`);
        }
        return studentDelete;
    }
};
exports.studentService = studentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('student')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        student_attendance_service_1.StudentAttendanceService])
], studentService);
//# sourceMappingURL=student.service.js.map