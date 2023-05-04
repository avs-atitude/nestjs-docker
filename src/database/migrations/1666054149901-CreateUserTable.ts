import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1666054149901 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                    },
                    {
                        name: "lastName",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");

    }

}
