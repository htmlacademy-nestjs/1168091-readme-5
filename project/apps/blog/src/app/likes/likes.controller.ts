import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikeDto } from './dto/like.dto';
import { ApiResponse } from '@nestjs/swagger';
import { LikeRdo } from './rdo/like.rdo';

@Controller()
export class LikesController {
  constructor(
    private readonly likesService: LikesService
  ) {
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The post has been liked.',
    type: LikeRdo,
  })
  @Post('like')
  async like(@Body() likeDto: LikeDto) {
    return await this.likesService.likePost(likeDto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been disliked.'
  })
  @Post('dislike')
  async dislike(@Body() likeDto: LikeDto) {
    return await this.likesService.dislikePost(likeDto);
  }
}
