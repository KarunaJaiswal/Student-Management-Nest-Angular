import * as Mongoose from 'mongoose'

export const userSchema = new Mongoose.Schema({
    email: String,
    password: String,
    auth_token:String
})