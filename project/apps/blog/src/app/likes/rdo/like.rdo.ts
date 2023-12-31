import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LikeRdo {
  @ApiProperty({
    description: 'Like ID',
    example: '3a4b5c6d-7e8f-9g0h-1i2j-3k4l5m6n7o8p',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'User ID',
    example: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
  })
  @Expose()
  userId: string;

  @ApiProperty({
    description: 'Post ID',
    example: '2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p',
  })
  @Expose()
  postId: string;
}
