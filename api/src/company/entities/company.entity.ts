import { Car } from 'src/car/entities/car.entity';
import { User } from 'src/user/entities';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
} from 'typeorm';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 70 })
  name: string;

  @Column({ name: 'web_url', type: 'varchar', length: 70 })
  webURL: string;

  @Column({ type: 'varchar', length: 40 })
  country: string;

  @Column({ type: 'varchar', length: 20 })
  street: string;

  @Column({ type: 'varchar', length: 6 })
  number: string;

  @Column({ type: 'varchar', length: 5 })
  cp: string;

  @Column({ type: 'varchar', length: 50 })
  state: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'varchar', length: 40 })
  col: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @OneToOne(
    _ => User,
    user => user.company,
    { cascade: true },
  )
  user: User;

  @OneToOne(
    _ => Car,
    car => car.company,
    { cascade: true },
  )
  car: Car;

}
