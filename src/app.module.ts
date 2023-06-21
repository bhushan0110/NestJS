import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule,
      MongooseModule.forRoot('mongodb+srv://Bvb:bvbbvb@cluster0.bdw90vn.mongodb.net/?retryWrites=true&w=majority'),
      AuthModule,
      ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
