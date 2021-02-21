import { Company } from 'src/company/entities';
import {
	PrimaryGeneratedColumn,
	Column,
	Entity,
	OneToOne,
	ManyToOne,
	JoinColumn,
} from 'typeorm';

@Entity('car')
export class Car {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 70 })
	name: string;

	@ManyToOne(
		() => Company,
		company => company.id,
		{ eager: true },
	)
	@JoinColumn({ name: 'company_id' })
	company: Company;

	@Column({ type: 'varchar', length: 20 })
	model: string;

	@Column({ type: 'varchar', length: 30 })
	motor: string;

	@Column({ type: 'varchar', length: 40 })
	transmision: string;

	@Column({ type: 'varchar', length: 30 })
	power: string;

	@Column({ type: 'int' })
	cylinders: number;

	@Column({ type: 'int' })
	numDors: number;

	@Column({ type: 'float' })
	price: number;

	@Column({ type: 'simple-array' })
	images: string[];

	@Column({ type: 'simple-array' })
	colors: string[];

	@Column({ type: 'bool', default: true })
	status: boolean;

}