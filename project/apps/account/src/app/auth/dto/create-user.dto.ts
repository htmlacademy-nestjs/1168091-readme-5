import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  email: string

  @ApiProperty({
    description: 'User name',
    example: 'Ivanov Ivan'
  })
  userName: string

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  password: string

  @ApiProperty({
    description: 'User avatar',
    example: 'https://doman.ru/woieowei.img',
    required: false
  })
  avatar?: string
}
