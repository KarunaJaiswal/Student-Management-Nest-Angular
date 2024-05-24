import { Document } from "mongoose";

export interface Isstudent extends Document{
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
}