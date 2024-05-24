import { Module } from "@nestjs/common";

import { studentController } from './student.controller';
import { studentService } from './student.service';
import { MongooseModule } from "@nestjs/mongoose";
import { studentSchema } from "./schema/student.schema";
import { StudentAttendanceService } from "src/student-attendance/student-attendance.service";
import { StudentAttendanceModule } from "src/student-attendance/student-attendance.module";

// main file for student folder 
// define controller / services / table file 

@Module({
    controllers: [studentController],
    providers: [studentService],
    // imports: [TypeOrmModule.forFeature([student])]   // in simple lang => type orm feature for student table
    imports: [
        MongooseModule.forFeature([{  name: 'student', schema: studentSchema }]),
        StudentAttendanceModule
    ]   // in simple lang => type orm feature for student table
})
export class studentModule { };