import { AbstractPostDto } from './abstract-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ContentType } from '@project/shared/types';

export class LinkPostDto extends AbstractPostDto {
  @ApiProperty({
    description: 'The link URL',
    example: 'https://example.com'
  })
  url: string;

  @ApiProperty({
    description: 'The link description',
    example: 'Link description'
  })
  description: string;

  @ApiProperty({
    description: 'Link type',
    example: ContentType.LINK,
    enum: ContentType
  })
  postType: ContentType.LINK;
}
