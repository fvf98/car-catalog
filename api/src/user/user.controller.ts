import { Controller, Get, Post, Put, Param, Body, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from './entities';
import { CreateUserDto, EditUserDto } from './dtos';
import { AppResource, AppRoles } from 'src/app.roles';
import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
        @InjectRolesBuilder()
        private readonly rolesBuilder: RolesBuilder
    ) { }

    @Auth({
        possession: 'any',
        action: 'read',
        resource: AppResource.USER,
    })
    @Get()
    async list(@User() user: UserEntity) {
        const data = user.roles == AppRoles.ADMIN ? await this.userService.list() : await this.userService.list(user);
        return { data };
    }

    @Auth({
        possession: 'own',
        action: 'read',
        resource: AppResource.USER,
    })
    @Get(':id')
    async get(
        @Param('id') id: number,
    ) {
        const data = await this.userService.get(id);
        return { data };
    }

    @Auth({
        possession: 'any',
        action: 'create',
        resource: AppResource.USER,
    })
    @Post()
    async insert(
        @Body() dto: CreateUserDto
    ) {
        const data = await this.userService.insert(dto);
        return { message: 'Usuario creado correctamente', data };
    }

    @Auth({
        possession: 'own',
        action: 'update',
        resource: AppResource.USER,
    })
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: EditUserDto,
        @User() user: UserEntity
    ) {
        const data = this.rolesBuilder.can(user.roles).updateAny(AppResource.USER).granted
            ? await this.userService.update(id, dto)
            : await this.userService.update(id, dto, user)

        return { message: 'Usuario modificado correctamente', data };
    }

    @Auth({
        possession: 'any',
        action: 'delete',
        resource: AppResource.USER,
    })
    @Patch(':id')
    async upDownUser(
        @Param('id') id: number,
    ) {
        const data = await this.userService.upDownUser(id);
        const status = data.status ? 'alta' : 'baja';
        return { message: `Usuario dado de ${status} correctamente`, data };
    }


}
