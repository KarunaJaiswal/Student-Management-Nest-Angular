import * as Mongoose from 'mongoose';
export declare const userSchema: Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    email?: string;
    password?: string;
    auth_token?: string;
}, Mongoose.Document<unknown, {}, Mongoose.FlatRecord<{
    email?: string;
    password?: string;
    auth_token?: string;
}>> & Mongoose.FlatRecord<{
    email?: string;
    password?: string;
    auth_token?: string;
}> & {
    _id: Mongoose.Types.ObjectId;
}>;
