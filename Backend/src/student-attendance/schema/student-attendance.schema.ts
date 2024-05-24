import * as Mongoose from 'mongoose';

export const attendanceSchema = new Mongoose.Schema({
    student_id: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'students'
    },
    attendanceList: {
        type: Array,
    },
    /* [
        { 
            month-year: "03/2024",
            attendanceData:["01/03/2024", "02/03/2024"],
            holidayList:[
                {holiday: "Holi-Dhuleti", date: "27/03/2024"}
            ]
        }
        ] */
})