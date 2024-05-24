/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { updatestudentDTO } from './update-student.dto';
import { createStudentDTO } from './create-student.dto';
import { Model } from 'mongoose';
import { Isstudent } from './student.interface';
import { StudentAttendanceService } from 'src/student-attendance/student-attendance.service';
export declare class studentService {
    private readonly studentModel;
    private studentAttendanceService;
    constructor(studentModel: Model<Isstudent>, studentAttendanceService: StudentAttendanceService);
    get(): Promise<Isstudent[]>;
    post(createStudentDTO: createStudentDTO): Promise<Isstudent>;
    findById(studentId: string): Promise<Isstudent>;
    update(studentId: string, studentDataDTO: updatestudentDTO): Promise<Isstudent>;
    delete(studentId: string): Promise<import("mongoose").Document<unknown, {}, Isstudent> & Isstudent & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
