import { AbstractPost, PostState } from '@project/shared/types';
import { Entity } from '@project/shared/core';

export abstract class AbstractPostEntity implements AbstractPost, Entity<string> {
  id: string;
  authorId: string;
  isRepost: boolean;
  postState: PostState;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  postType: string;

  protected constructor(abstractPost: AbstractPost) {
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
      id: this.id,
      postState: this.postState,
      authorId: this.authorId,
      tags: this.tags,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isRepost: this.isRepost
    }
  }

}
