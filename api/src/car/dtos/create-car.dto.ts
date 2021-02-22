import { IsArray, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Company } from "src/company/entities";

export class CreateCarDto {
	@IsString()
	@MaxLength(70)
	name: string;

	@IsNotEmpty()
	company: Company;

	@IsString()
	@MaxLength(20)
	model: string;

	@IsString()
	@MaxLength(30)
	motor: string;

	@IsString()
	@MaxLength(40)
	transmission: string;

	@IsString()
	@MaxLength(30)
	power: string;

	@IsNumber()
	cylinders: number;

	@IsNumber()
	numDoors: number;

	@IsNumber()
	price: number;

	@IsString()
	image: string;

	@IsString({ each: true })
	@IsArray()
	colors: string[];


}
