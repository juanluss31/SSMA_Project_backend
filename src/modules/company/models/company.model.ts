import { Field, ObjectType } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserModel } from '../../auth/models/user.model';
import { CounterModel } from '../../counter/models/counter.model';

@ObjectType()
@Entity()
export class CompanyModel {
	@Field({ description: 'Identifier' })
	@PrimaryGeneratedColumn('rowid')
	id: number;

	@Field({ description: 'Company name' })
	@Column({ type: 'varchar', length: 255, unique: true })
	name: string;

	@Field({ description: 'Company address' })
	@Column({ type: 'varchar', length: 255 })
	address: string;

	@Field({ description: 'Company postal code' })
	@Column({ type: 'varchar', length: 255 })
	postalCode: string;

	@Field({ description: 'Contact phone' })
	@Column({ type: 'varchar', length: 255 })
	phone: string;

	@OneToMany(() => UserModel, user => user.company, { nullable: true })
	users: UserModel[];

	@OneToMany(() => CounterModel, counter => counter.company, { nullable: true })
	counters: CounterModel[];

	@BeforeInsert()
	infoToLowerCase(): void {
		this.name = this.name.toLowerCase();
	}
}
