import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository
  ) {
  }

  async getUser(userId: string) {
    return await this.userRepository.findById(userId);
  }
}
