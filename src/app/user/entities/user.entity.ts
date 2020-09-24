import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @Column()
  ic: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone_no: string;

  @Column()
  notification_token: string;

  @CreateDateColumn({ default: () => 'NOW()' })
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date;
}
