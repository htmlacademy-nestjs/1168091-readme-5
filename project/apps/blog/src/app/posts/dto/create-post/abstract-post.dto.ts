import { ApiProperty } from '@nestjs/swagger';
import { PostState } from '@project/shared/types';

export abstract class AbstractPostDto {
  @ApiProperty({
    description: 'AuthorID',
    example: '7c091505-5dd9-4192-8141-4f0187fc9204'
  })
  authorId: string;

  @ApiProperty({
    description: 'State of post',
    example: 'created',
    enum: PostState,
    required: false
  })
  postState?: PostState;

  @ApiProperty({
    description: 'Post tags',
    type: [String],
    example: ['tagId1', 'tagId2'],
  })
  tags?: string[];
}
