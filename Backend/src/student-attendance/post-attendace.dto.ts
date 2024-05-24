import { IsArray, IsString } from 'class-validator';


export class postAttendaceDto {
    
    @IsString()
    student_id?: String;

    @IsArray()
    attendanceList: Array<Object>;
}