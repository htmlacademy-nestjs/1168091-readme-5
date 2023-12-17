import { BaseMemoryRepository } from '@project/shared/core';
import { CommentEntity } from './entities/comment.entity';

export class CommentsMemoryRepository extends BaseMemoryRepository<CommentEntity> {}
