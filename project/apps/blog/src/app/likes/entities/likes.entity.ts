import { Like } from '@project/shared/types';

export class LikesEntity {
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
