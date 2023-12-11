import { Like } from '@project/shared/types';
import { Entity } from '@project/shared/core';

export class LikesEntity implements Like, Entity<string>{
  id: string;
  userId: string;
  postId: string;

  constructor(like: Like) {
    this.id = like.id;
    this.userId = like.userId;
    this.postId = like.postId;
  }

  public toPOJO() {
    return {
      id: this.id,
      userId: this.userId,
      postId: this.postId
    }
  }
}
