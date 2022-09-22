import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';
import { SearchModule } from './search/search.module';
import { ServiceService } from './search/service.service';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    SearchModule
  ],
  controllers: [AppController, SearchController],
  providers: [AppService, ServiceService],
})
export class AppModule {}
