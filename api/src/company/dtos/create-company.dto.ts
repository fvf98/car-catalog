import { IsString, MaxLength } from "class-validator";

export class CreateCompanyDto {
  @IsString()
  @MaxLength(70)
  name: string;

  @IsString()
  @MaxLength(70)
  webURL: string;

  @IsString()
  @MaxLength(40)
  country: string;

  @IsString()
  @MaxLength(20)
  street: string;

  @IsString()
  @MaxLength(6)
  number: string;

  @IsString()
  @MaxLength(5)
  cp: string;

  @IsString()
  @MaxLength(50)
  state: string;

  @IsString()
  @MaxLength(50)
  city: string;

  @IsString()
  @MaxLength(40)
  col: string;

}
