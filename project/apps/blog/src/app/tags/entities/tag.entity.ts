import { HashTag } from '@project/shared/types';
import { Entity } from '@project/shared/core';

export class TagEntity implements HashTag, Entity<string> {
  id: string;
  tagName: string;

  constructor(hashTag: HashTag) {
    this.id = hashTag.id;
    this.tagName = hashTag.tagName;
  }

  public toPOJO() {
    return {
      id: this.id,
      tagName: this.tagName
    }
  }
}
