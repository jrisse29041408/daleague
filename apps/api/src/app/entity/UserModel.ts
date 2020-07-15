import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export default class Users extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column('varchar', { length: 255, unique: true }) email: string;
}
