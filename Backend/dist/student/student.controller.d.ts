import { studentService } from "./student.service";
import { updatestudentDTO } from "./update-student.dto";
import { createStudentDTO } from "./create-student.dto";
export declare class studentController {
    private student_service;
    constructor(student_service: studentService);
    getstudent(response: any): Promise<any>;
    poststudent(response: any, createStudentDTO: createStudentDTO): Promise<any>;
    getstudentById(response: any, studentId: string): Promise<any>;
    update(response: any, studentId: string, studentDataDTO: updatestudentDTO): Promise<any>;
    delete(response: any, studentId: string): Promise<any>;
}
