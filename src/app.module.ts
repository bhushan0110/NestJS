import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule,
      MongooseModule.forRoot(''),
      AuthModule,
      ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
