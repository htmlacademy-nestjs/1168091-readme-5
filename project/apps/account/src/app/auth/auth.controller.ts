import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { fillDto } from '@project/shared/helpers';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  AUTH_USER_EXISTS,
  AUTH_USER_LOGGED,
  AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG,
  USER_CREATED
} from '../account.constant';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: LoggedUserRdo,
    description: USER_CREATED
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: AUTH_USER_EXISTS
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.authService.register(createUserDto);
    return fillDto(LoggedUserRdo, newUser.toPOJO())
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: AUTH_USER_LOGGED
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: AUTH_USER_PASSWORD_WRONG,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: AUTH_USER_NOT_FOUND,
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(loginUserDto);
    return fillDto(LoggedUserRdo, verifiedUser);
  }

  @Get('logout')
  async logout() {}

  @Get('refresh')
  async refresh() {}
}
