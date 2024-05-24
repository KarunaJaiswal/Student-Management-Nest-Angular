import * as Mongoose from 'mongoose';
export declare const studentSchema: Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    email?: string;
    fullname?: string;
    fathername?: string;
    mothername?: string;
    gender?: string;
    age?: number;
    std?: number;
    phone_number?: number;
    address?: string;
    city?: string;
    state?: string;
    zipcode?: number;
    birth_date?: Date;
}, Mongoose.Document<unknown, {}, Mongoose.FlatRecord<{
    email?: string;
    fullname?: string;
    fathername?: string;
    mothername?: string;
    gender?: string;
    age?: number;
    std?: number;
    phone_number?: number;
    address?: string;
    city?: string;
    state?: string;
    zipcode?: number;
    birth_date?: Date;
}>> & Mongoose.FlatRecord<{
    email?: string;
    fullname?: string;
    fathername?: string;
    mothername?: string;
    gender?: string;
    age?: number;
    std?: number;
    phone_number?: number;
    address?: string;
    city?: string;
    state?: string;
    zipcode?: number;
    birth_date?: Date;
}> & {
    _id: Mongoose.Types.ObjectId;
}>;
