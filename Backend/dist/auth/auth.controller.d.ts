import { createUserDTO } from 'src/user/createUser.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginUser(response: any, createuserDto: createUserDTO): Promise<any>;
    logoutUser(response: any, createuserDto: createUserDTO): Promise<any>;
}
