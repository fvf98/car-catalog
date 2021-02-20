import { Controller, Get, Post, Put, Param, Body, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, EditUserDto } from './dtos';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    async list() {
        const data = await this.userService.list();
        return { data };
    }

    @Get(':id')
    async get(
        @Param('id') id: number,
    ) {
        const data = await this.userService.get(id);
        return { data };
    }

    @Post()
    async insert(
        @Body() dto: CreateUserDto
    ) {
        const data = await this.userService.insert(dto);
        return { message: 'Usuario creado correctamente', data };
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: EditUserDto
    ) {
        const data = await this.userService.update(id, dto);
        return { message: 'Usuario modificado correctamente', data };
    }

    @Patch(':id')
    async upDownUser(
        @Param('id') id: number,
    ) {
        const data = await this.userService.upDownUser(id);
        const status = data.status ? 'alta' : 'baja';
        return { message: `Usuario dado de ${status} correctamente`, data };
    }


}
