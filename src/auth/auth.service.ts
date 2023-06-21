import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService{
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ){}

    async validateUser(email:String, password: String){
        const user =await this.userService.find(email);
        if(user&&user.password === password){
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any){
        const payload = {email: user.email, sub: user.id};
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
