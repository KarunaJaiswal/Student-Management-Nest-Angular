import { createUserDTO } from 'src/user/createUser.dto';
import { UserService } from 'src/user/user.service';
import { IsUser } from 'src/user/user.interface';
import { Model } from 'mongoose';
export declare class AuthService {
    private UserService;
    private readonly userModel;
    constructor(UserService: UserService, userModel: Model<IsUser>);
    login(createUserdto: createUserDTO): Promise<IsUser>;
    logout(createUserdto: createUserDTO): Promise<boolean>;
}
