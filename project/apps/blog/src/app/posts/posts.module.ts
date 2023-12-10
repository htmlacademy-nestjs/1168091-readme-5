import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostMemoryRepository } from './post-memory.repository';

@Module({
  controllers: [PostsController],
  exports: [PostMemoryRepository],
  providers: [PostsService, PostMemoryRepository],
})
export class PostsModule {}
