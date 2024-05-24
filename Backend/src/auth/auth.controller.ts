import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { createUserDTO } from 'src/user/createUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    async loginUser(@Res() response, @Body() createuserDto: createUserDTO) {
        try {
            const userLogin = await this.authService.login(createuserDto)
            return response.status(HttpStatus.OK).json({
                message: 'Admin login success!',
                data: userLogin
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Admin login failed!',
                error: error
            })
        }
    }

    @Post('/logout')
    async logoutUser(@Res() response, @Body() createuserDto: createUserDTO) {
        try {
             await this.authService.logout(createuserDto)
            return response.status(HttpStatus.OK).json({
                message: 'Admin logout success!',
                data: []
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Admin logout failed!',
                error: error
            })
        }
    }


}
