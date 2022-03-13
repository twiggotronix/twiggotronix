import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOneOrFail({ username });
    }

    async create(user: User): Promise<User> {
        const pass = user.password;
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(pass, salt);

        const userEntity = await this.usersRepository.create({ ...user, password });
        this.usersRepository.insert(userEntity);

        return userEntity;
    }

    async getAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
}
