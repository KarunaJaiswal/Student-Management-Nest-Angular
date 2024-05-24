import { Module } from '@nestjs/common';
import { StudentAttendanceService } from './student-attendance.service';
import { attendanceSchema } from './schema/student-attendance.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentAttendanceController } from './student-attendance.controller';

@Module({
  controllers: [StudentAttendanceController],
  providers: [StudentAttendanceService],
  imports: [
    MongooseModule.forFeature([{ name: 'student_attendance', schema: attendanceSchema }]),
  ],
  exports: [StudentAttendanceService]
})
export class StudentAttendanceModule { }
