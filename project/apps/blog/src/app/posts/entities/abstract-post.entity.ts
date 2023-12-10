import { AbstractPost, PostState } from '@project/shared/types';
import { Entity } from '@project/shared/core';

export class AbstractPostEntity implements AbstractPost, Entity<string> {
  id: string;
  authorId: string;
  isRepost: boolean;
  postState: PostState;
  tags: string[];
  createdAt: string;
  updatedAt: string;

  constructor(abstractPost: AbstractPost) {
    this.id = abstractPost.id;
    this.postState = abstractPost.postState;
    this.authorId = abstractPost.authorId;
    this.tags = abstractPost.tags;
    this.createdAt = abstractPost.createdAt;
    this.updatedAt = abstractPost.updatedAt;
    this.isRepost = abstractPost.isRepost;
  }

  public toPOJO() {
    return {
      ...this
    }
  }

}
