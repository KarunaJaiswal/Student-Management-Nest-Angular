import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { StudentAttendanceService } from './student-attendance.service';
import { response } from 'express';
import { postAttendaceDto } from './post-attendace.dto';

@Controller('student-attendance')
export class StudentAttendanceController {
    constructor(private attendanceService: StudentAttendanceService) { }

    @Get('/:studentId')
    async getStudentAttendance(@Res() response, @Param('studentId') studentId: string) {
        try {

        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'student attendance fetch failed!',
                error: error
            })
        }
    }


    @Put('/:studentId')
    async updateStudentAttendance(
        @Res() response,
        @Param('studentId') studentId: string,
        @Body() postAttendaceDTO: postAttendaceDto
    ) {

        try {

            const updateAttendanceData = await this.attendanceService.updateStudentAttendanceService(studentId, postAttendaceDTO)

            return response.status(HttpStatus.OK).json({
                message: 'Updated',
                data: updateAttendanceData
            })

        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'student update failed!',
                error: error
            })
        }




    }


    // @Get()
    // async getStudentAttendanceData(@Res() response) {
    // try {




    //     } catch (error) {

    //     }
    // }



}
