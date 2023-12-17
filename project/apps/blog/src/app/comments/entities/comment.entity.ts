import { Comment } from '@project/shared/types';
import { Entity } from '@project/shared/core';

export class CommentEntity implements Comment, Entity<string> {
  id: string;
  text: string;
  userId: string;
  postId: string;
  createdAt: string;
  updatedAt: string;

  constructor(comment: Comment) {
    this.text = comment.text;
    this.userId = comment.userId;
    this.postId = comment.postId;
    this.createdAt = comment.createdAt;
    this.updatedAt = comment.updatedAt;
  }

  public toPOJO() {
    return {
      id: this.id,
      text: this.text,
      userId: this.userId,
      postId: this.postId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }
}
