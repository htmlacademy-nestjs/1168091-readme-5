import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty({
    description: 'Comment ID',
    example: '2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p',
  })
  id: string

  @ApiProperty({
    description: 'Comment text',
    example: 'This is a sample comment.',
  })
  text: string;
}
