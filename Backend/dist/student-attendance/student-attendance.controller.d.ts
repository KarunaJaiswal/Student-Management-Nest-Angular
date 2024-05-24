import { StudentAttendanceService } from './student-attendance.service';
import { postAttendaceDto } from './post-attendace.dto';
export declare class StudentAttendanceController {
    private attendanceService;
    constructor(attendanceService: StudentAttendanceService);
    getStudentAttendance(response: any, studentId: string): Promise<any>;
    updateStudentAttendance(response: any, studentId: string, postAttendaceDTO: postAttendaceDto): Promise<any>;
}
