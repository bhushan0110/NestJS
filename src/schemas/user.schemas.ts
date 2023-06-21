import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User{
    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop()
    password: String;
}

export const UserSchema = SchemaFactory.createForClass(User);