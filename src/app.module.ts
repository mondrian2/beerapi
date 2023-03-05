import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cestaspoa:cestaspoa@cluster0.l58w9wa.mongodb.net/cestaspoa?retryWrites=true&w=majority',
    ),
    CommandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
