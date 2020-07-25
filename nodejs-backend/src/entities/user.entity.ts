import {Entity, Column} from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class User extends BaseEntity {
    @Column()
    username: string;

    @Column()
    age: number;
}