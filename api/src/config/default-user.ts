import { getRepository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DEFAULT_USER_EMAIL, DEFAULT_USER_LAST_NAME, DEFAULT_USER_NAME, DEFAULT_USER_PASSWORD, DEFAULT_USER_ROL } from './constants';
import { User } from '../user/entities';

export const setDefaultUser = async (config: ConfigService) => {
  const userRepository = getRepository<User>(User);

  const defaultUser = await userRepository
    .createQueryBuilder()
    .where('email = :email', {
      email: config.get<string>(DEFAULT_USER_EMAIL),
    })
    .getOne();

  if (!defaultUser) {
    const adminUser = userRepository.create({
      name: config.get<string>(DEFAULT_USER_NAME),
      lastName: config.get<string>(DEFAULT_USER_LAST_NAME),
      email: config.get<string>(DEFAULT_USER_EMAIL),
      password: config.get<string>(DEFAULT_USER_PASSWORD),
      roles: config.get<string>(DEFAULT_USER_ROL),
    });

    return await userRepository.save(adminUser);
  }
};
