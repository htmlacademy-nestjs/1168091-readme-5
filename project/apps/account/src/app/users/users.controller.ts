import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { fillDto } from '@project/shared/helpers';
import { UserRdo } from './rdo/user.rdo';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {
  }
  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.usersService.getUser(id);
    return fillDto(UserRdo, user.toPOJO());
  }
}
