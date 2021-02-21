import { IsArray, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Company } from "src/company/entities";

export class CreateCarDto {
	@IsString()
	@MaxLength(70)
	name: string;

	@IsNotEmpty()
	company: Company;

	@IsString()
	@MaxLength(255)
	logo: string;

	@IsString()
	@MaxLength(20)
	model: string;

	@IsString()
	@MaxLength(30)
	motor: string;

	@IsString()
	@MaxLength(40)
	transmision: string;

	@IsString()
	@MaxLength(30)
	power: string;

	@IsNumber()
	cylinders: number;

	@IsNumber()
	numDors: number;

	@IsNumber()
	price: number;

	@IsString({ each: true })
	@IsArray()
	images: string[];

	@IsString({ each: true })
	@IsArray()
	colors: string[];


}
