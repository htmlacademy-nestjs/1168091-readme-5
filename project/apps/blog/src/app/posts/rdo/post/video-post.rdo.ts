import { AbstractPostRdo } from './abstract-post.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class VideoPostRdo extends AbstractPostRdo {
  @ApiProperty({
    description: 'The post title',
    example: 'Video Title',
  })
  @Expose()
  title: string;

  @ApiProperty({
    description: 'The video link',
    example: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  })
  @Expose()
  videoLink: string;
}
