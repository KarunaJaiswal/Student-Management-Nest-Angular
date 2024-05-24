"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const student_module_1 = require("./student/student.module");
const project_module_1 = require("./project/project.module");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const student_attendance_module_1 = require("./student-attendance/student-attendance.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            student_module_1.studentModule,
            project_module_1.ProjectModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/Nestjs'),
            student_attendance_module_1.StudentAttendanceModule,
        ],
        providers: [
            {
                provide: common_1.ValidationPipe,
                useValue: new common_1.ValidationPipe({
                    whitelist: true,
                    forbidNonWhitelisted: true,
                    transform: true,
                }),
            },
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map