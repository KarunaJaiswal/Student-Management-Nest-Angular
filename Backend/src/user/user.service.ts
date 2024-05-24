import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IsUser } from './user.interface';
import { createUserDTO } from './createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('user') private readonly userModel: Model<IsUser>
    ) { }


    //create user 
    async postUser(createUserdto: createUserDTO): Promise<IsUser> {

        const saltValue = await bcrypt.genSalt()
        createUserdto.password = await bcrypt.hash(createUserdto.password, saltValue)
        const createUser = await new this.userModel(createUserdto)
        if (createUser) {
            return createUser.save();
        }
    }

    async findUserByEmail(email: string): Promise<IsUser> {
        const studentExist = await this.userModel.findOne({ email: email })
        if (!studentExist) {
            throw new NotFoundException(`User #${email} not found`);
        }
        return studentExist;
    }

    async findAndUpdateUser(userId: string, body: any): Promise<IsUser> {

        const {auth_token, ...updateFields} = body
        let updateUser = await this.userModel.findOneAndUpdate({ _id: userId }, { $set: { auth_token: auth_token } })
        return updateUser;
    }
    //login user
    // @Post()
    // async loginUser(createUserdto: createUserDTO): Promise<IsUser> {

    //     const userExist = await  this.userModel.findOne({email: createUserdto.email})
    //     if (!userExist) {
    //         throw new Error('User doen not exist')
    //     }
    //     userExist.auth_token = jwt
    // }

}
