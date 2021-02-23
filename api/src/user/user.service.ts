import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, EditUserDto } from './dtos';

export interface UserFindOne {
    id?: number;
    email?: string;
}

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async list(userEntity?: User) {
        const users = userEntity ? await this.userRepository.find({ company: userEntity.company })
            : await this.userRepository.find();

        return users;
    }

    async get(id: number, userEntity?: User) {
        const user = await this.userRepository
            .findOne(id)
            .then(u => (!userEntity ? u : !!u && userEntity.id === u.id ? u : null));

        if (!user) throw new NotFoundException('Usuario no encontrado o action no autorizada');

        return user;
    }

    async insert(dto: CreateUserDto) {
        const userExist = await this.findOne({ email: dto.email });

        if (userExist) throw new BadRequestException('Ya existe un usuario con este correo');

        const newUser = this.userRepository.create(dto);
        const user = await this.userRepository.save(newUser);

        delete user.password;
        return user;
    }

    async update(id: number, dto: EditUserDto, userEntity?: User) {
        const userBefor = await this.get(id, userEntity);
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

    async findOne(data: UserFindOne) {
        return await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.company', 'company', 'company.id = user.company_id')
            .where(data)
            .addSelect('user.password')
            .getOne();
    }
}
