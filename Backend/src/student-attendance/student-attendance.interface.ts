import * as Mongoose from 'mongoose';
import { Document } from "mongoose";

export interface IsStudentAttendance extends Document {
    student_id : {type:  Mongoose.Types.ObjectId}, 
    attendanceList: Array<Object>
}