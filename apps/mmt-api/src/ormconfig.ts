import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as entities from './database/entities-index';

const ormconfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './db.sqlite',
  entities: Object.values(entities),
  migrations: ['apps/mmt-api/src/database/migration/*.js'],
  logging: 'all',
  cli: {
    migrationsDir: "apps/mmt-api/src/database/migration/"
}
};

export = ormconfig;
