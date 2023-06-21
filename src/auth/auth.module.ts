import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport/dist";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { LocalStrategy } from "./local.startegy";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstats } from "./auth.constant";
import { JwtStrategy } from "./jwt.startegy";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstats.secret,
            signOptions: {expiresIn: '1hr'}
        }),
    ],
    controllers: [AuthController],
    providers:[AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}