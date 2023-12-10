import { AbstractPostRdo } from './abstract-post.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PhotoPostRdo extends AbstractPostRdo {
  @ApiProperty({
    description: 'The photo URL',
    example: 'https://example.com/photo.jpg',
  })
  @Expose()
  photo: string;
}
