import * as Mongoose from 'mongoose';
export declare const attendanceSchema: Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    attendanceList: any[];
    student_id?: Mongoose.Types.ObjectId;
}, Mongoose.Document<unknown, {}, Mongoose.FlatRecord<{
    attendanceList: any[];
    student_id?: Mongoose.Types.ObjectId;
}>> & Mongoose.FlatRecord<{
    attendanceList: any[];
    student_id?: Mongoose.Types.ObjectId;
}> & {
    _id: Mongoose.Types.ObjectId;
}>;
