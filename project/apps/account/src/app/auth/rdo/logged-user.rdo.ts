import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'User name',
    example: 'Ivanov Ivan'
  })
  @Expose()
  userName: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: 'Date of user create',
    example: '11.10.2023'
  })
  @Expose()
  createdAt: string;

  @ApiProperty({
    description: 'Access token',
    example: 'sldkjf;slafda;lsdfj;asldf'
  })
  @Expose()
  accessToken: string;

  @ApiProperty({
    description: 'User avatar',
    example: 'https://doman.ru/woieowei.img',
    required: false
  })
  @Expose()
  avatar?: string;
}
