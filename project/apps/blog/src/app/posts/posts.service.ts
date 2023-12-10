import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post';

@Injectable()
export class PostsService {
  async createPost(cretePostDto: CreatePostDto) {}

  async updatePost(updatePostDto: CreatePostDto, postId: string) {}

  async deletePost(id: string) {}

  async repost(id: string) {}

  async getPostById(id: string) {}
}
