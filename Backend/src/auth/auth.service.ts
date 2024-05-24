import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { createUserDTO } from 'src/user/createUser.dto';
import { UserService } from 'src/user/user.service';
import * as JWT from 'jsonwebtoken';
import { IsUser } from 'src/user/user.interface';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class    AuthService {
    constructor(
        private UserService: UserService,
        @InjectModel('user') private readonly userModel: Model<IsUser>) { }


    async login(createUserdto: createUserDTO): Promise<IsUser> {

        const userExist = await this.UserService.findUserByEmail(createUserdto.email)
        if (!userExist) {
            throw NotFoundException
        }

        let checkPass = await bcrypt.compare(createUserdto.password, userExist.password)
        if (!checkPass) {
            throw Error('Invalid password!')
        }

        let userData = userExist
        let auth_token = await JWT.sign(userData.toJSON(), 'SECRETkey@123');
        return await this.userModel.findByIdAndUpdate(userExist._id, { auth_token: auth_token }, { new: true })
        // let updatedUser = await this.userModel.findByIdAndUpdate(userData._id, {$set: {token: auth_token}} , {returnDocument: 'after'})

        // if (updatedUser) {
        // console.log('updatedUser :', updatedUser);
        //     return updatedUser;
        // }
    }

    async logout(createUserdto: createUserDTO) {
        await this.userModel.findOneAndUpdate({ auth_token: createUserdto.auth_token }, { auth_token: null })
        return true;
    }
}
