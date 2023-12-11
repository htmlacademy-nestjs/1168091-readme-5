import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { LikeMemoryRepository } from './like-memory.repository';

@Module({
  providers: [LikesService, LikeMemoryRepository],
  controllers: [LikesController],
  exports: [LikeMemoryRepository]
})
export class LikesModule {}
