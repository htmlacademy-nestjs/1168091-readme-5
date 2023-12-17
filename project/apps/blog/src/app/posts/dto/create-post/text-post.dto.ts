import { AbstractPostDto } from './abstract-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ContentType } from '@project/shared/types';

export class TextPostDto extends AbstractPostDto {
  @ApiProperty({
    description: 'The post title',
    example: 'Video Title',
  })
  title: string;

  @ApiProperty({
    description: 'The post text',
    example: 'This post about...',
  })
  text: string;

  @ApiProperty({
    description: 'The announce of post',
    example: 'This post about...',
  })
  announce: string;

  @ApiProperty({
    description: 'Text type',
    example: ContentType.TEXT,
    enum: ContentType
  })
  postType: ContentType.TEXT;
}
