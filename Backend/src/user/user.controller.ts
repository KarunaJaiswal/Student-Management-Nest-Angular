import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { createUserDTO } from './createUser.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    
    constructor (private UserService : UserService){}

    @Post()
    async createUser(@Res()response , @Body() createUserdto:createUserDTO){
        try {
            
            const createUser = await this.UserService.postUser(createUserdto)
            if(createUser){
                return response.status(HttpStatus.OK).json({
                    message: 'User create success!',
                    data: createUser
                })  
            }

        }  catch (error) {
        console.log('error :', error);
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'user create failed!',
                error: error
            })
        }
    }


}
