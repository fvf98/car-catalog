import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto, EditCompanyDto } from './dtos';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService
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

    @Post()
    async insert(
        @Body() dto: CreateCompanyDto
    ) {
        const data = await this.companyService.insert(dto);
        return { message: 'Compañia creada correctamente', data };
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: EditCompanyDto
    ) {
        const data = await this.companyService.update(id, dto);
        return { message: 'Compañia modificada correctamente', data };
    }

    @Patch(':id')
    async upDownUser(
        @Param('id') id: number,
    ) {
        const data = await this.companyService.upDownCompany(id);
        const status = data.status ? 'alta' : 'baja';
        return { message: `Compañia dada de ${status} correctamente`, data };
    }
}
