import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post';
import { RepostDto } from './dto/repost.dto';
import { PostsService } from './posts.service';
import { fillDto } from '@project/shared/helpers';
import { postTypeToRdoClass } from '../rdo/post';
import { AbstractPostEntity } from './entities/abstract-post.entity';

@Controller('post')
export class PostsController {

  constructor(
    private readonly postService: PostsService
  ) {
  }
  @Post('create')
  async create(@Body() createPostDto: CreatePostDto) {
    const newPost: AbstractPostEntity = await this.postService.createPost(createPostDto);
    return fillDto(postTypeToRdoClass[newPost.postType], newPost.toPOJO());
  }

  @Put('update/:id')
  async update(
    @Body() updatePostDto: CreatePostDto,
    @Param('id') id: string
  ) {
    return await this.postService.updatePost(updatePostDto, id);
  }

  @Delete('delete/:id')
  async delete(
    @Param('id') id: string
  ) {
    return await this.postService.deletePost(id);
  }

  @Post('/repost/:id')
  async repost(
    @Body() repostDto: RepostDto,
    @Param('id') id: string
  ) {
    return await this.postService.repost(id);
  }

  @Get('/:id')
  async getPostById(
    @Param('id') id: string
  ) {
    return await this.postService.getPostById(id);
  }
}
