import { Injectable } from '@nestjs/common';
import { LikeMemoryRepository } from './like-memory.repository';
import { LikeDto } from './dto/like.dto';

@Injectable()
export class LikesService {
  constructor(
    private readonly likesRepository: LikeMemoryRepository
  ) {
  }

  async likePost(likeDto: LikeDto) {}

  async dislikePost(likeDto: LikeDto) {}
}
