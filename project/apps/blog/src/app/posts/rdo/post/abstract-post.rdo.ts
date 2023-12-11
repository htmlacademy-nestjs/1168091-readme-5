import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ContentType, PostState } from '@project/shared/types';

export abstract class AbstractPostRdo {
  @ApiProperty({
    description: 'The unique post ID',
    example: 'a1b2c3d4',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'Author ID',
    example: 'a1b2c3d4',
  })
  @Expose()
  authorId: string;

  @ApiProperty({
    description: 'Is repost flag',
    example: false,
  })
  @Expose()
  isRepost: boolean;

  @ApiProperty({
    description: 'State of post',
    example: 'created',
    enum: PostState
  })
  @Expose()
  postState: PostState;

  @ApiProperty({
    description: 'Date created of post',
    example: '11.10.23'
  })
  @Expose()
  createdAt: string;

  @ApiProperty({
    description: 'Date updated of post',
    example: '11.10.23'
  })
  @Expose()
  updatedAt: string;

  @ApiProperty({
    description: 'The type of the post',
    example: ContentType.TEXT,
    enum: ContentType,
  })
  @Expose()
  postType: ContentType;


}
