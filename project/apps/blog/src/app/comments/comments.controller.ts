import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { fillDto } from '@project/shared/helpers';
import { CommentRdo } from './rdo/comment.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
  ) {
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The comment has been created.',
    type: CommentRdo,
  })
  @Post('create')
  async create(@Body() createCommentDto: CreateCommentDto) {
    const newComment = await this.commentsService.create(createCommentDto);
    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been updated.',
    type: CommentRdo,
  })
  @Put('update')
  async update(@Body() updateCommentDto: UpdateCommentDto) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been deleted.',
  })
  @Delete('/:id')
  async delete(@Param() id: string) {}

  @Get('/:id')
  async getById(@Param() id: string) {}
}
