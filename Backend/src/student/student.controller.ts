import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Req, Res } from "@nestjs/common";
import { Request, response } from "express";
import { studentService } from "./student.service";
import { updatestudentDTO } from "./update-student.dto";
import { createStudentDTO } from "./create-student.dto";

@Controller('/student')
export class studentController {

    constructor(private student_service: studentService) { }

    @Get()
    async getstudent(@Res() response) {
        try {
            const studentData = await this.student_service.get()
            return response.status(HttpStatus.OK).json({
                message: 'student fetch success!',
                data: studentData
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'student fetch failed!',
                error: error
            })
        }

    }

    @Post()
    async poststudent(@Res() response, @Body() createStudentDTO: createStudentDTO) {

        try {
            const studentCreate = await this.student_service.post(createStudentDTO)

            return response.status(HttpStatus.CREATED).json({
                message: 'student create success!',
                data: studentCreate
            })

        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'student create failed!',
                error: error
            })
        }
    }


    @Get('/:studentId')
    async getstudentById(@Res() response, @Param('studentId') studentId: string) {
        try {
            const studentData = await this.student_service.findById(studentId)
            return response.status(HttpStatus.OK).json({
                message: 'student fetch success!',
                data: studentData
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'student fetch failed!',
                error: error
            })
        }


    }

    @Put('/:studentId')
    async update(@Res() response, @Param('studentId') studentId: string, @Body() studentDataDTO: updatestudentDTO) {

        try {
            const studentUpdtae = await this.student_service.update(studentId, studentDataDTO)
            return response.status(HttpStatus.OK).json({
                message: 'student update success!',
                data: studentUpdtae
            })

        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'student update failed!',
                error: error
            })
        }



    }


    @Delete('/:studentId')
    async delete(@Res() response, @Param('studentId') studentId: string) {
        try {
            await this.student_service.delete(studentId)
            return response.status(HttpStatus.OK).json({
                message: 'student delete success!',
                data: []
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'student delete failed!',
                error: error
            })
        }


    }


}