import { ApiProperty } from '@nestjs/swagger';

export class RepostDto {

  @ApiProperty({
    description: 'Post ID',
    example: '7c091505-5dd9-4192-8141-4f0187fc9204',
  })
  postId: string;
}
