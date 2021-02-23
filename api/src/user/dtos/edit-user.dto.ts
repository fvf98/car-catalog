import { IsOptional } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class EditUserDto extends CreateUserDto {
    @IsOptional()
    password: string;
}
