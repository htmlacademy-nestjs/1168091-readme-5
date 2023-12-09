import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from '../users/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async register(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findByEmail(createUserDto.email)

    if (existUser) {
      throw new ConflictException('User with this email exists')
    }

    const dateNow = dayjs().toDate().toDateString()

    const userEntity = new UserEntity({
      email: createUserDto.email,
      userName: createUserDto.userName,
      avatar: createUserDto.avatar ?? '',
      passwordHash: '',
      createdAt: dateNow,
      updatedAt: dateNow
    })

    await userEntity.setPassword(createUserDto.password)

    return this.userRepository.save(userEntity)

  }
}
