import { AbstractPostDto } from './abstract-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ContentType } from '@project/shared/types';

export class PhotoPostDto extends AbstractPostDto {
  @ApiProperty({
    description: 'The photo URL',
    example: 'https://example.com/photo.jpg',
  })
  photo: string;

  @ApiProperty({
    description: 'Photo type',
    example: ContentType.PHOTO,
    enum: ContentType
  })
  postType: ContentType.PHOTO;
}
