// import { IsString } from 'class-validator';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// create student validations

export class createUserDTO {   

    @IsEmail()
    @IsString()
    email: string

    @IsString()
    password: string;

    @IsString()
    auth_token:string
}
