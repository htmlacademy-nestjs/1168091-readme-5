import { AbstractPostRdo } from './abstract-post.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TextPostRdo extends AbstractPostRdo {
  @ApiProperty({
    description: 'The post announce',
    example: 'Post announce',
  })
  @Expose()
  announce: string;

  @ApiProperty({
    description: 'The post content',
    example: 'Post content',
  })
  @Expose()
  text: string;

  @ApiProperty({
    description: 'The post title',
    example: 'Post Title',
  })
  @Expose()
  title: string;
}
