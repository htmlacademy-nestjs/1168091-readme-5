import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post';
import { PostMemoryRepository } from './post-memory.repository';
import { AbstractPost, ContentType, LinkPost, PhotoPost, QuotePost, TextPost, VideoPost } from '@project/shared/types';
import { PhotoEntity } from './entities/photo.entity';
import { LinkPostEntity } from './entities/link-post.entity';
import { QuotePostEntity } from './entities/quote-post.entity';
import { VideoPostEntity } from './entities/video-post.entity';
import { TextPostEntity } from './entities/text-post.entity';
import { AbstractPostEntity } from './entities/abstract-post.entity';

@Injectable()
export class PostsService {

  constructor(
    private readonly postRepository: PostMemoryRepository
  ) {
  }

  private createPostEntity(cretePostDto: CreatePostDto): AbstractPostEntity {
    switch (cretePostDto.postType) {
      case ContentType.PHOTO:
        return new PhotoEntity(cretePostDto as PhotoPost);
      case ContentType.LINK:
        return new LinkPostEntity(cretePostDto as LinkPost);
      case ContentType.QUOTE:
        return new QuotePostEntity(cretePostDto as QuotePost);
      case ContentType.VIDEO:
        return new VideoPostEntity(cretePostDto as VideoPost);
      case ContentType.TEXT:
        return new TextPostEntity(cretePostDto as TextPost);
      default:
        throw new BadRequestException('Invalid post type')
    }
  }

  async createPost(cretePostDto: CreatePostDto) {
    const newPost = this.createPostEntity(cretePostDto);

    const dateNow = new Date().toDateString();

    newPost.createdAt = dateNow;
    newPost.updatedAt = dateNow;

    return this.postRepository.save(newPost);
  }

  async updatePost(updatePostDto: CreatePostDto, postId: string) {}

  async deletePost(id: string) {}

  async repost(id: string) {}

  async getPostById(id: string) {}
}
