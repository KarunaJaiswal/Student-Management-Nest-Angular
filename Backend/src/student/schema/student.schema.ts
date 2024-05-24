// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// @Schema()
// export class student {

// @Prop()
// name:  string;

// @Prop()
// email: string;

// }

// export const studentSchema = SchemaFactory.createForClass<student>


import * as Mongoose from 'mongoose'

export const studentSchema = new Mongoose.Schema({
    fullname: String,
    fathername: String,
    mothername: String,
    gender: String,
    age: Number,
    std: Number,
    birth_date: Date,
    email: String,
    phone_number: Number,
    address:String,
    city:String,
    state:String,
    zipcode: Number,
})
