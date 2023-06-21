import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    name: String;
    
    @IsEmail()
    email: String;

    @IsNotEmpty()
    password: String;
}