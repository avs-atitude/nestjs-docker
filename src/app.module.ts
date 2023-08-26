import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from './config/ormconfig';
@Module({
  imports: [
    ConfigModule.forRoot(),
     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        dataSourceOptions(configService),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
