import { Model } from 'mongoose';
import { IsUser } from './user.interface';
import { createUserDTO } from './createUser.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<IsUser>);
    postUser(createUserdto: createUserDTO): Promise<IsUser>;
    findUserByEmail(email: string): Promise<IsUser>;
    findAndUpdateUser(userId: string, body: any): Promise<IsUser>;
}
