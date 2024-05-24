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
exports.StudentAttendanceController = void 0;
const common_1 = require("@nestjs/common");
const student_attendance_service_1 = require("./student-attendance.service");
const post_attendace_dto_1 = require("./post-attendace.dto");
let StudentAttendanceController = exports.StudentAttendanceController = class StudentAttendanceController {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    async getStudentAttendance(response, studentId) {
        try {
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'student attendance fetch failed!',
                error: error
            });
        }
    }
    async updateStudentAttendance(response, studentId, postAttendaceDTO) {
        try {
            const updateAttendanceData = await this.attendanceService.updateStudentAttendanceService(studentId, postAttendaceDTO);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Updated',
                data: updateAttendanceData
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'student update failed!',
                error: error
            });
        }
    }
};
__decorate([
    (0, common_1.Get)('/:studentId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StudentAttendanceController.prototype, "getStudentAttendance", null);
__decorate([
    (0, common_1.Put)('/:studentId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('studentId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, post_attendace_dto_1.postAttendaceDto]),
    __metadata("design:returntype", Promise)
], StudentAttendanceController.prototype, "updateStudentAttendance", null);
exports.StudentAttendanceController = StudentAttendanceController = __decorate([
    (0, common_1.Controller)('student-attendance'),
    __metadata("design:paramtypes", [student_attendance_service_1.StudentAttendanceService])
], StudentAttendanceController);
//# sourceMappingURL=student-attendance.controller.js.map