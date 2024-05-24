import { Injectable, NotFoundException, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { updatestudentDTO } from './update-student.dto';
import { createStudentDTO } from './create-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Isstudent } from './student.interface';
import { StudentAttendanceService } from 'src/student-attendance/student-attendance.service';

@Injectable()
export class studentService {
    // constructor(
    //     @InjectRepository(student)
    //     private studentModel : Repository<student>       // constructor =>  injecting student repository into student service. (Table defining) :)
    // ){}

    //Inject model = define student model.  
    constructor(
        @InjectModel('student') private readonly studentModel: Model<Isstudent>,
        private studentAttendanceService: StudentAttendanceService
    ) { }

    async get(): Promise<Isstudent[]> {
        return this.studentModel.find();
    }

    async post(createStudentDTO: createStudentDTO): Promise<Isstudent> {
        const newStudent = await new this.studentModel(createStudentDTO)

        await newStudent.save();

        let attendaceObj = {
            student_id: newStudent._id,
            attendanceList: [
                {
                    month_year: `${new Date().getMonth()}/${new Date().getFullYear()}`,
                    attendanceData: [],
                    holidayList: []
                }
            ]
        }

        await this.studentAttendanceService.postAttendaceService(attendaceObj)

        return newStudent;

    }

    async findById(studentId: string): Promise<Isstudent> {
        const studentExist = await this.studentModel.findById(studentId)
        if (!studentExist) {
            throw new NotFoundException(`Student #${studentId} not found`);
        }
        return studentExist;
    }

    async update(studentId: string, studentDataDTO: updatestudentDTO): Promise<Isstudent> {

        const studentUpdate = await this.studentModel.findByIdAndUpdate(studentId, studentDataDTO, { new: true })
        if (!studentUpdate) {
            throw new NotFoundException(`Student #${studentId} not found`);
        }
        return studentUpdate
    }

    async delete(studentId: string) {

        const studentDelete = await this.studentModel.findByIdAndDelete(studentId)
        if (!studentDelete) {
            throw new NotFoundException(`Student #${studentId} not found`);
        }
        return studentDelete
    }

}
