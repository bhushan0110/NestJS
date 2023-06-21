import { Body, Controller, Get, Param, Post, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    getUser() {
        return this.userService.get();
    }

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get('/:userID')
    getUserByID(@Param('userID', ParseIntPipe) userID: Number) {
        return this.userService.show(userID);
    }

};