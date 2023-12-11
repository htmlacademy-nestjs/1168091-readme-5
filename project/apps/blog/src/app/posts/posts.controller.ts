import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post';
import { RepostDto } from './dto/repost.dto';
import { PostsService } from './posts.service';
import { fillDto } from '@project/shared/helpers';
import { postTypeToRdoClass } from '../rdo/post';
import { AbstractPostEntity } from './entities/abstract-post.entity';
import { ApiResponse } from '@nestjs/swagger';
import { CommentRdo } from '../comments/rdo/comment.rdo';
import { AbstractPostRdo } from '../rdo/post/abstract-post.rdo';

@Controller('post')
export class PostsController {

  constructor(
    private readonly postService: PostsService
  ) {
  }
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The post has been created.',
    type: AbstractPostRdo,
  })
  @Post('create')
  async create(@Body() createPostDto: CreatePostDto) {
    const newPost: AbstractPostEntity = await this.postService.createPost(createPostDto);
    return fillDto(postTypeToRdoClass[newPost.postType], newPost.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been updated.',
    type: AbstractPostRdo,
  })
  @Put('update/:id')
  async update(
    @Body() updatePostDto: CreatePostDto,
    @Param('id') id: string
  ) {
    return await this.postService.updatePost(updatePostDto, id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been deleted.',
  })
  @Delete('delete/:id')
  async delete(
    @Param('id') id: string
  ) {
    return await this.postService.deletePost(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been created.',
  })
  @Post('/repost/:id')
  async repost(
    @Body() repostDto: RepostDto,
    @Param('id') id: string
  ) {
    return await this.postService.repost(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been created.',
    type: AbstractPostRdo
  })
  @Get('/:id')
  async getPostById(
    @Param('id') id: string
  ) {
    return await this.postService.getPostById(id);
  }
}
