import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  Entity,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 70 })
  lastName: string;

  @Column({ type: 'int' })
  companyId: number;

  @Column({ type: 'varchar', length: 40, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: false, select: false })
  password: string;

  @Column({ type: 'varchar', length: 15 })
  roles: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password)
      return;

    this.password = await bcrypt.hash(this.password, 6);
  }
}
