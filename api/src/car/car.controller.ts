import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';
import { AppActions, AppPossession, AppResource } from 'src/app.roles';
import { Auth } from 'src/common/decorators';
import { CarService } from './car.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { EditCarDto } from './dtos/edit-car.dto';

@Controller('car')
export class CarController {
    constructor(
        private readonly carService: CarService,
        @InjectRolesBuilder()
        private readonly rolesBuilder: RolesBuilder
    ) { }


    @Get()
    async list() {
        const data = await this.carService.list();
        return { data };
    }

    @Get(':id')
    async get(
        @Param('id') id: number
    ) {
        const data = await this.carService.get(id);
        return { data };
    }

    @Auth({
        possession: AppPossession.OWN,
        action: AppActions.CREATE,
        resource: AppResource.CAR,
    })
    @Post()
    async insert(
        @Body() dto: CreateCarDto
    ) {
        const data = await this.carService.insert(dto);
        return { message: 'Compañia creada correctamente', data };
    }

    @Auth({
        possession: AppPossession.OWN,
        action: AppActions.UPDATE,
        resource: AppResource.CAR,
    })
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: EditCarDto
    ) {

        const data = await this.carService.update(id, dto);
        return { message: 'Carro modificado correctamente', data };
    }

    @Auth({
        possession: AppPossession.ANY,
        action: AppActions.DELETE,
        resource: AppResource.CAR,
    })
    @Patch(':id')
    async upDownUser(
        @Param('id') id: number,
    ) {
        const data = await this.carService.upDownCar(id);
        const status = data.status ? 'alta' : 'baja';
        return { message: `Carro dado de ${status} correctamente`, data };
    }
}
