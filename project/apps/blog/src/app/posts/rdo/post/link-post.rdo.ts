import { AbstractPostRdo } from './abstract-post.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LinkPostRdo extends AbstractPostRdo {
  @ApiProperty({
    description: 'The link description',
    example: 'Link description',
  })
  @Expose()
  description: string;

  @ApiProperty({
    description: 'The link URL',
    example: 'https://example.com',
  })
  @Expose()
  url: string;
}
