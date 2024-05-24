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
exports.studentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const update_student_dto_1 = require("./update-student.dto");
const create_student_dto_1 = require("./create-student.dto");
let studentController = exports.studentController = class studentController {
    constructor(student_service) {
        this.student_service = student_service;
    }
    async getstudent(response) {
        try {
            const studentData = await this.student_service.get();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'student fetch success!',
                data: studentData
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'student fetch failed!',
                error: error
            });
        }
    }
    async poststudent(response, createStudentDTO) {
        try {
            const studentCreate = await this.student_service.post(createStudentDTO);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'student create success!',
                data: studentCreate
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'student create failed!',
                error: error
            });
        }
    }
    async getstudentById(response, studentId) {
        try {
            const studentData = await this.student_service.findById(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'student fetch success!',
                data: studentData
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'student fetch failed!',
                error: error
            });
        }
    }
    async update(response, studentId, studentDataDTO) {
        try {
            const studentUpdtae = await this.student_service.update(studentId, studentDataDTO);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'student update success!',
                data: studentUpdtae
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'student update failed!',
                error: error
            });
        }
    }
    async delete(response, studentId) {
        try {
            await this.student_service.delete(studentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'student delete success!',
                data: []
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'student delete failed!',
                error: error
            });
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], studentController.prototype, "getstudent", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_student_dto_1.createStudentDTO]),
    __metadata("design:returntype", Promise)
], studentController.prototype, "poststudent", null);
__decorate([
    (0, common_1.Get)('/:studentId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], studentController.prototype, "getstudentById", null);
__decorate([
    (0, common_1.Put)('/:studentId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('studentId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_student_dto_1.updatestudentDTO]),
    __metadata("design:returntype", Promise)
], studentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:studentId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], studentController.prototype, "delete", null);
exports.studentController = studentController = __decorate([
    (0, common_1.Controller)('/student'),
    __metadata("design:paramtypes", [student_service_1.studentService])
], studentController);
//# sourceMappingURL=student.controller.js.map