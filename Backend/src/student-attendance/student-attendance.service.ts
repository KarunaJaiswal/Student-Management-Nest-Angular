import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { IsStudentAttendance } from './student-attendance.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { postAttendaceDto } from './post-attendace.dto';

@Injectable()
export class StudentAttendanceService {

    constructor(
        @InjectModel('student_attendance') private readonly studentAttendaceModel: Model<IsStudentAttendance>
    ) { }

    async postAttendaceService(postAttendaceDTO: postAttendaceDto): Promise<IsStudentAttendance> {

        const postAttendanceData = await new this.studentAttendaceModel(postAttendaceDTO);
        return postAttendanceData.save();
    }


    async getStudentAttendanceService(studentId: string, month_year?: string): Promise<IsStudentAttendance[]> {
        const getAttendanceData = await this.studentAttendaceModel.find({ student_id: studentId, month_year: month_year ? month_year : `${new Date().getMonth()}/${new Date().getFullYear()}` });

        if (getAttendanceData.length > 0) {
            return getAttendanceData
        } else {
            throw new NotFoundException('Student attendance not found!')
        }
    }

    async updateStudentAttendanceService(studentId: string, updateBody: object): Promise<any> /* Promise<IsStudentAttendance> */ {

        const attendaceExist = await this.studentAttendaceModel.findOne({ student_id: studentId })
        console.log('attendaceExist :', attendaceExist);

        // let updateAttendanceData : Object;

        // console.log('updateAttendanceData :', updateAttendanceData);
        // if (!attendaceExist) {
        //     updateAttendanceData = await this.studentAttendaceModel.findOneAndUpdate({student_id: studentId}, { updateBody }, { returnDocument: 'after' })
        //     throw new NotFoundException('Attendace data not found!')

        // }else{
        //     if (!updateAttendanceData) {
        //         throw InternalServerErrorException;
        //     }
        //     return updateAttendanceData

        // }


    }

}
