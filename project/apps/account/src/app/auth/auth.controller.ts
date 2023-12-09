import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { fillDto } from '@project/shared/helpers';
import { CreatedUserRdo } from './rdo/created-user.rdo';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.authService.register(createUserDto);
    return fillDto(CreatedUserRdo, newUser.toPOJO())
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(loginUserDto);
    return fillDto(CreateUserDto, verifiedUser);
  }

  @Get('logout')
  async logout() {}

  @Get('refresh')
  async refresh() {}
}
