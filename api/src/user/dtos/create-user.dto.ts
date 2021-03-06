import { IsString, IsEmail, MinLength, MaxLength, IsEnum, IsNumber, IsNotEmpty } from "class-validator";
import { AppRoles } from "src/app.roles";
import { Company } from "src/company/entities";
import { EnumToString } from "src/helpers/enumToString";

export class CreateUserDto {
  @IsString()
  @MaxLength(45)
  name: string;

  @IsString()
  @MaxLength(70)
  lastName: string;

  @IsNotEmpty()
  company: Company;

  @IsEmail()
  @MaxLength(40)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsString()
  @IsEnum(AppRoles, {
    message: `must be a valid role value, ${EnumToString(AppRoles)}`,
  })
  roles: string;

}
