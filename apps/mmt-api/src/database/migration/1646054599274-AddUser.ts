import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1646054599274 implements MigrationInterface {
    name = 'AddUser1646054599274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
