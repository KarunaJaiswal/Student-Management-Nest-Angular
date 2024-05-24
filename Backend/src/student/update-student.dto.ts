
//update student validations

// import { IsString } from 'class-validator';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

// create student validations

export class updatestudentDTO {    

    @IsEmail()
    email: string;
    
    @IsString()
    fullname: string;
   
    @IsString()
    fathername: string;
    
    @IsString()
    mothername: string;
    
    @IsString()
    gender: string;

    @IsNumber()
    age: Number;

    @IsNumber()
    std: Number;

    @IsNumber()
    phone_number: Number;

    @IsString()
    address:string;

    @IsString()
    city:string;

    @IsString()
    state:string;
    
    @IsNumber()
    zipcode: Number;
}

