// import { IsString } from 'class-validator';
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

// create student validations

export class createStudentDTO {    

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

    @IsDate()
    birth_date: Date

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
