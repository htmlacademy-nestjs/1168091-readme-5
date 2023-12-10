import { BaseMemoryRepository } from '@project/shared/core';
import { AbstractPostEntity } from './entities/abstract-post.entity';

export class PostMemoryRepository extends BaseMemoryRepository<AbstractPostEntity>{}
