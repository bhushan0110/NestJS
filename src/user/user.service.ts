import {Model} from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';

import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "src/schemas/user.schemas";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async get (): Promise<User[]> {
        return this.userModel.find();
    }

    async create (createUserDto: CreateUserDto): Promise<User> {
        console.log(createUserDto);
        
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    find ( email: String ){
        return this.userModel.findOne({email:email});
    }

    show (userID:Number) {
        return {userID};
    }
}