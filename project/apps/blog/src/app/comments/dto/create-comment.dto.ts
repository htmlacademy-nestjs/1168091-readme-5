import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment text',
    example: 'This is a sample comment.',
  })
  text: string;

  @ApiProperty({
    description: 'User ID',
    example: '2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p',
  })
  userId: string;

  @ApiProperty({
    description: 'Post ID',
    example: '2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p',
  })
  postId: string;
}
