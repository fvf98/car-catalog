import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, EditUserDto } from './dtos';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async list() {
        return await this.userRepository.find();
    }

    async get(id: number) {
        const user = await this.userRepository.findOne(id);
        if (!user) throw new NotFoundException('Usuario no encontrado');

        return user;
    }

    async insert(dto: CreateUserDto) {
        const userExist = await this.userRepository.query(`SELECT * FROM user where user.email = '${dto.email}'`);

        if (userExist.length) throw new BadRequestException('Ya existe un usuario con este correo');

        const newUser = this.userRepository.create(dto);
        const user = await this.userRepository.save(newUser);

        delete user.password;
        return user;
    }

    async update(id: number, dto: EditUserDto) {
        const userBefor = await this.get(id);
        const editedUser = Object.assign(userBefor, dto);

        const userAfter = await this.userRepository.save(editedUser);

        delete userAfter.password;
        return userAfter;
    }

    async upDownUser(id: number) {
        const user = await this.get(id);
        user.status = !user.status;

        return await this.userRepository.save(user);
    }
}
