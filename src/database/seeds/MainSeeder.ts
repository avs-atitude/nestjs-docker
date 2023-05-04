import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import UserSeeder from './User.seeder'

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		_: SeederFactoryManager
	): Promise<void> {
		await runSeeder(dataSource, UserSeeder)
	}
}

