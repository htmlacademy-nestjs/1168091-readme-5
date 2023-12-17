import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentsMemoryRepository } from './comments-memory.repository';

@Module({
  imports: [],
  exports: [CommentsMemoryRepository],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsMemoryRepository],
})
export class CommentsModule {}
