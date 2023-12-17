import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../users/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import dayjs from 'dayjs';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from '../account.constant';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async register(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findByEmail(createUserDto.email)

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS)
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

  public async verifyUser(loginUserDto: LoginUserDto) {
    const {email, password} = loginUserDto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser.toPOJO();
  }
}
