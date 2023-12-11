import { BaseMemoryRepository } from '@project/shared/core';
import { LikesEntity } from './entities/likes.entity';

export class LikeMemoryRepository extends BaseMemoryRepository<LikesEntity> {}
