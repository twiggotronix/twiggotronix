import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
@Unique(['username'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text')
    username: string;

    @Column('text')
    password: string;

    @Column('text')
    firstName: string;

    @Column('text')
    lastName: string;
}