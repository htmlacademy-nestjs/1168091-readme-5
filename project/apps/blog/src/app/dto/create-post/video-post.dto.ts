import { AbstractPostDto } from './abstract-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ContentType } from '@project/shared/types';

export class VideoPostDto extends AbstractPostDto {
  @ApiProperty({
    description: 'The post title',
    example: 'Video Title'
  })
  title: string;

  @ApiProperty({
    description: 'The video link',
    example: 'https://www.youtube.com/tra-la-la'
  })
  videoLink: string;

  @ApiProperty({
    description: 'Post type',
    example: ContentType.VIDEO,
    enum: ContentType
  })
  postType: ContentType.VIDEO;
}
