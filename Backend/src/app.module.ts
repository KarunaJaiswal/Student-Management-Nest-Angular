import { Module, ValidationPipe } from "@nestjs/common";
import { AppController } from './app.controller';
import { studentModule } from './student/student.module'
import { ProjectModule } from './project/project.module';
import { MongooseModule } from "@nestjs/mongoose";
import { studentController } from './student/student.controller';
import { UserModule } from './user/user.module';
import { UserController } from "./user/user.controller";
import { AuthModule } from './auth/auth.module';
import { StudentAttendanceController } from './student-attendance/student-attendance.controller';
import { StudentAttendanceModule } from './student-attendance/student-attendance.module';


@Module({
  controllers: [AppController],
  imports: [
    studentModule,
    ProjectModule,
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Nestjs'),
    StudentAttendanceModule,
  ],
  providers: [
    {
      provide: ValidationPipe,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ]
})   // module injectable => so we can make a appModule class a Nest Module
export class AppModule { }