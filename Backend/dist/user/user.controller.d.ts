import { createUserDTO } from './createUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    createUser(response: any, createUserdto: createUserDTO): Promise<any>;
}
