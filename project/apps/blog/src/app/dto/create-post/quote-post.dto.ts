import { AbstractPostDto } from './abstract-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ContentType } from '@project/shared/types';

export class QuotePostDto extends AbstractPostDto {
  @ApiProperty({
    description: 'The quote text',
    example: 'This post about...',
  })
  text: string;

  @ApiProperty({
    description: 'AuthorID',
    example: '7c091505-5dd9-4192-8141-4f0187fc9204'
  })
  quoteAuthorId: string;

  @ApiProperty({
    description: 'Quote type',
    example: ContentType.QUOTE,
    enum: ContentType
  })
  postType: ContentType.QUOTE;
}
