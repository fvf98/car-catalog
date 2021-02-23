import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';
import { AppActions, AppPossession, AppResource } from 'src/app.roles';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from './../user/entities';
import { CompanyService } from './company.service';
import { CreateCompanyDto, EditCompanyDto } from './dtos';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService,
        @InjectRolesBuilder()
        private readonly rolesBuilder: RolesBuilder
    ) { }

    @Get()
    async list() {
        const data = await this.companyService.list();
        return { data };
    }

    @Get(':id')
    async get(
        @Param('id') id: number
    ) {
        const data = await this.companyService.get(id);
        return { data };
    }

    @Auth({
        possession: AppPossession.ANY,
        action: AppActions.CREATE,
        resource: AppResource.COMPANY,
    })
    @Post()
    async insert(
        @Body() dto: CreateCompanyDto
    ) {
        const data = await this.companyService.insert(dto);
        return { message: 'Compañia creada correctamente', data };
    }

    @Auth({
        possession: AppPossession.OWN,
        action: AppActions.UPDATE,
        resource: AppResource.COMPANY,
    })
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: EditCompanyDto,
        @User() user: UserEntity
    ) {
        if (!this.rolesBuilder.can(user.roles).updateAny(AppResource.COMPANY).granted)
            if (id != user.company.id) throw new NotFoundException('Compañia no encontrada o action no autorizada');

        const data = await this.companyService.update(id, dto);
        return { message: 'Compañia modificada correctamente', data };
    }

    @Auth({
        possession: AppPossession.ANY,
        action: AppActions.DELETE,
        resource: AppResource.COMPANY,
    })
    @Patch(':id')
    async upDownUser(
        @Param('id') id: number,
    ) {
        const data = await this.companyService.upDownCompany(id);
        const status = data.status ? 'alta' : 'baja';
        return { message: `Compañia dada de ${status} correctamente`, data };
    }
}
