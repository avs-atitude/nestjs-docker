import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeds/main.seeder';

export const dataSourceOptions = (
  configService: ConfigService,
): DataSourceOptions => {
  return {
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    database: configService.get<string>('DB_NAME'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    entities: ['dist/**/*.entity.js'],
  };
};

//required read environment variables
ConfigModule.forRoot();

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/src/shared/database/migrations/*.js'],
  seeds: [MainSeeder],
  synchronize: false,
};

const dataSource = new DataSource(options);

export default dataSource;
