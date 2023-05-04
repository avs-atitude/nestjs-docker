import { MainSeeder } from "../database/seeds/MainSeeder";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { User } from "../entities/User.entity";
import { ConfigModule } from "@nestjs/config";

ConfigModule.forRoot();

const options: DataSourceOptions & SeederOptions = {
  migrationsTableName: 'migrations',
  name: 'default',
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: [`./src/database/migrations/*.{ts,js}`],
  seeds: [MainSeeder],
  dropSchema: true,
  migrationsRun: true,
  synchronize: false,
}

export default new DataSource(options);
