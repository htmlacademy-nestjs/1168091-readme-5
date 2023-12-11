import { AbstractPostRdo } from './abstract-post.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class QuotePostRdo extends AbstractPostRdo {
  @ApiProperty({
    description: 'The quote author ID',
    example: 'wuerowiuerowue',
  })
  @Expose()
  quoteAuthorId: string;

  @ApiProperty({
    description: 'The quote content',
    example: 'Quote content',
  })
  @Expose()
  text: string;
}
