import { IsStudentAttendance } from './student-attendance.interface';
import { Model } from 'mongoose';
import { postAttendaceDto } from './post-attendace.dto';
export declare class StudentAttendanceService {
    private readonly studentAttendaceModel;
    constructor(studentAttendaceModel: Model<IsStudentAttendance>);
    postAttendaceService(postAttendaceDTO: postAttendaceDto): Promise<IsStudentAttendance>;
    getStudentAttendanceService(studentId: string, month_year?: string): Promise<IsStudentAttendance[]>;
    updateStudentAttendanceService(studentId: string, updateBody: object): Promise<any>;
}
