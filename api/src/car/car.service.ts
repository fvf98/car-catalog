import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dtos/create-car.dto';
import { EditCarDto } from './dtos/edit-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {

    constructor(
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>
    ) { }

    async list() {
        return await this.carRepository.find();
    }

    async get(id: number) {
        const car = await this.carRepository.findOne(id);
        if (!car) throw new NotFoundException('Carro no encontrada');

        return car;
    }

    async insert(dto: CreateCarDto) {
        const carExist = await this.carRepository.findOne({ name: dto.name });
        if (carExist) throw new BadRequestException('Ya existe un carro con este nombre');

        const newCar = this.carRepository.create(dto);
        const car = await this.carRepository.save(newCar);

        return car;
    }

    async update(id: number, dto: EditCarDto) {
        const car = await this.get(id);
        const editedCar = Object.assign(car, dto);
        return await this.carRepository.save(editedCar);
    }

    async upDownCar(id: number) {
        const car = await this.get(id);
        car.status = !car.status;
        return await this.carRepository.save(car);
    }
}
