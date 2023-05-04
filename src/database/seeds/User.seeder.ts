import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../entities/User.entity';
import { faker } from '@faker-js/faker';

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        _: SeederFactoryManager
    ): Promise<any> {
        const userRepository = dataSource.getRepository(User)

        const users = userRepository.create(this.generateUsers())
        await userRepository.clear();
        await userRepository.save(users)
    }

    private generateUsers() {
        const users = []
        for (let index = 0; index < 50; index++) {
            const firstName = faker.name.firstName().toLocaleLowerCase();
            const lastName = faker.name.lastName().toLocaleLowerCase();
            
            users.push({
                firstName,
                lastName,
                email: faker.internet.email(firstName, lastName)
            })
        }

        return users;
    }
}